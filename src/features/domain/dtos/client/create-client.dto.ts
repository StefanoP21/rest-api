export class CreateClientDto {
    private constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly phone: number,
        public readonly address: string
    ) {}

    static create(object: Record<string, any>): [string?, CreateClientDto?] {
        const { name, email, phone, address } = object;

        if (!name || name.length === 0) return ['El nombre es obligatorio'];
        if (!email || email.length === 0)
            return ['El correo electrónico es obligatorio'];
        if (!phone) return ['El número de teléfono es obligatorio'];
        if (typeof phone !== 'number') return ['El precio debe ser numérico'];
        if (!address || address.length === 0)
            return ['La dirección de envío es obligatoria'];

        return [undefined, new CreateClientDto(name, email, phone, address)];
    }
}
