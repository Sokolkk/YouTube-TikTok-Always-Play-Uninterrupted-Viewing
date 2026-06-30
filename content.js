const blockVisibility = () => {
    Object.defineProperty(document, 'hidden', { value: false, configurable: true });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
};

blockVisibility();
document.addEventListener('visibilitychange', (e) => {
    e.stopImmediatePropagation();
}, true);