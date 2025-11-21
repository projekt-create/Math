const Form = document.querySelector('form');
const Input = document.querySelector('.input');

const Walking = document.querySelector('.walking_text');
const bicycle = document.querySelector('.bicycle_text');
const car = document.querySelector('.car_text');
const plan = document.querySelector('.plan_text');

Form.addEventListener('submit', (e) => {
    e.preventDefault();

    const distance = Number(Input.value.trim());

    if (!distance) {
        alert("Masofa kiriting!");
        return;
    }

    // Tezliklar (km/h)
    const walkSpeed = 3.6;
    const bicycleSpeed = 20;
    const carSpeed = 70;
    const planeSpeed = 800;

    Walking.innerHTML = `${(distance / walkSpeed).toFixed(2)} soat`;
    bicycle.innerHTML = `${(distance / bicycleSpeed).toFixed(2)} soat`;
    car.innerHTML = `${(distance / carSpeed).toFixed(2)} soat`;
    plan.innerHTML = `${(distance / planeSpeed).toFixed(2)} soat`;
});
