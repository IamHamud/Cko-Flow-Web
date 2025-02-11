/* global CheckoutWebComponents */
(async () => {
  // Insert your public key here
  const PUBLIC_KEY = "InsertYourPublicKeyHere";

  const response = await fetch("/create-payment-sessions", { method: "POST" }); // Order
  const paymentSession = await response.json();

  if (!response.ok) {
    console.error("Error creating payment session", paymentSession);
    return;
  }

  const checkout = await CheckoutWebComponents({
    publicKey: PUBLIC_KEY,
    environment: "sandbox",
    locale: "en-GB",
    paymentSession,
    onReady: () => {
      console.log("Checkout.com Flow is Ready");
    },
    onPaymentCompleted: (_component, paymentResponse) => {
      console.log("✅ Payment successful! Payment ID:", paymentResponse.id);
      // Redirect to success page after successful payment
      window.location.href = "/success.html";
    },
    onChange: (component) => {
      console.log(
        `onChange() -> isValid: "${component.isValid()}" for "${
          component.type
        }"`
      );
    },
    onError: (component, error) => {
      console.error("❌ Payment failed! Error:", error, "Component:", component.type);
      // Redirect to failure page if payment fails
      window.location.href = "/failure.html";
    },
  });

  const flowComponent = checkout.create("flow");
  flowComponent.mount(document.getElementById("flow-container"));
})();

// Function to trigger toast messages for payment success or failure
function triggerToast(id) {
  var element = document.getElementById(id);
  element.classList.add("show");

  setTimeout(function () {
    element.classList.remove("show");
  }, 5000);
}

// Check URL parameters to display success/failure messages
const urlParams = new URLSearchParams(window.location.search);
const paymentStatus = urlParams.get("status");
const paymentId = urlParams.get("cko-payment-id");

if (paymentStatus === "succeeded") {
  triggerToast("successToast");
}

if (paymentStatus === "failed") {
  triggerToast("failedToast");
}

if (paymentId) {
  console.log("Create Payment with PaymentId:", paymentId);
}
