document.addEventListener('DOMContentLoaded', () => {
    const skillsContainer = document.getElementById('skills-container');
    const skills = Array.from(skillsContainer.children);

    skills.forEach(skill => {
        skill.style.position = 'absolute';
        skill.style.left = `${Math.random() * (skillsContainer.offsetWidth - skill.offsetWidth)}px`;
        skill.style.top = `${Math.random() * (skillsContainer.offsetHeight - skill.offsetHeight)}px`;

        let vx = (Math.random() - 0.5) * 2;
        let vy = (Math.random() - 0.5) * 2;

        function animate() {
            let x = parseFloat(skill.style.left);
            let y = parseFloat(skill.style.top);

            x += vx;
            y += vy;

            if (x < 0 || x > skillsContainer.offsetWidth - skill.offsetWidth) {
                vx *= -1;
            }

            if (y < 0 || y > skillsContainer.offsetHeight - skill.offsetHeight) {
                vy *= -1;
            }

            skill.style.left = `${x}px`;
            skill.style.top = `${y}px`;

            requestAnimationFrame(animate);
        }

        animate();
    });
});
