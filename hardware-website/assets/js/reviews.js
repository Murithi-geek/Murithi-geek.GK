document.getElementById('review-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;
    const rating = document.getElementById('rating').value;

    // Create a new review element
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Feedback:</strong> ${feedback}</p>
        <p><strong>Rating:</strong> ${'⭐'.repeat(rating)}</p>
    `;

    // Append the new review to the reviews list
    document.getElementById('reviews-list').appendChild(review);

    // Clear the form
    document.getElementById('review-form').reset();
});