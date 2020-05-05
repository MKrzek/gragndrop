export function autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    console.log(originalMethod);
    console.log(descriptor);
    const adjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
//# sourceMappingURL=autobind.js.map