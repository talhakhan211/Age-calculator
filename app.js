
function calculateAge() {
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);


    if (birthDate > today) {
        document.getElementById('result').textContent = "Birth date cannot be in the future.";
        return;
    }

    let age = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();

    if (months < 0 || (months === 0 && today.getDate() < birthDate.getDate())) {
        age--;
        months += 12;
    }

    document.getElementById('result').textContent = `You are ${age} years and ${months} months old.`;
};
calculateAge()