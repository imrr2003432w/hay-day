document.addEventListener('DOMContentLoaded', () => {
    const options = document.querySelectorAll('.option');
    const selectedDiamondsSpan = document.getElementById('selected-diamonds');
    const purchaseBtn = document.getElementById('purchase-btn');

    let selectedAmount = 0;

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            options.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to the clicked option
            option.classList.add('selected');
            // Update selected amount
            selectedAmount = parseInt(option.dataset.amount);
            selectedDiamondsSpan.textContent = selectedAmount;
            // Enable purchase button
            purchaseBtn.disabled = false;
        });
    });

    purchaseBtn.addEventListener('click', () => {
        if (selectedAmount > 0) {
            // Store selected amount in localStorage to access it on the payment page
            localStorage.setItem('selectedAmount', selectedAmount);
            // Redirect to payment page
            window.location.href = 'payment.html';
        } else {
            alert('الرجاء تحديد كمية الألماس أولاً.');
        }
    });

    // Disable purchase button initially
    purchaseBtn.disabled = true;
});
