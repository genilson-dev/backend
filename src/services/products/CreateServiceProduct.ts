import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    banner: string;
    category_id: string;
}

class CreateServiceProduct {
    async execute({ name, price, description, banner, category_id }: ProductRequest) {
        // Verificando se o nome do produto foi fornecido
        if (!name) {
            throw new Error("Nome do produto é obrigatório");
        }

        // Verificar se o produto já consta no banco de dados
        const productAlreadyExists = await prismaClient.product.findFirst({
            where: {
                name: name,
            },
        });

        if (productAlreadyExists) {
            throw new Error("Produto já existe");
        }

        const product = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            },
            // Escolhendo o que vai ser retornado para o usuário quando ele for cadastrado
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                category_id: true,
            },
        });

        return product;
    }

    async getAllProducts() {
        const products = await prismaClient.product.findMany({
            orderBy: {
                name: "asc", // Ordenando os produtos em ordem crescente pelo nome
            },
            select: {
                id: true,
                name: true,
                price: true,
                description: true,
                banner: true,
                category_id: true,
            },
        });

        return products;
    }
}

export { CreateServiceProduct };
