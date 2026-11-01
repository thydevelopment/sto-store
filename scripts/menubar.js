function toggleMenu() {
    const panel    = document.getElementById('menu-panel');
    const backdrop = document.getElementById('menu-backdrop');

    if (!panel || !backdrop) {
        console.error('រកមិនឃើញ menu-panel ឬ menu-backdrop');
        return;
    }

    const isOpen = !panel.classList.contains('-translate-x-full');

    if (isOpen) {
        panel.classList.add('-translate-x-full');
        panel.classList.remove('translate-x-0');

        backdrop.classList.add('opacity-0', 'pointer-events-none');
        backdrop.classList.remove('opacity-100');

        document.body.classList.remove('overflow-hidden');
    } else {
        panel.classList.remove('-translate-x-full');
        panel.classList.add('translate-x-0');

        backdrop.classList.remove('opacity-0', 'pointer-events-none');
        backdrop.classList.add('opacity-100');

        document.body.classList.add('overflow-hidden');
    }
}
