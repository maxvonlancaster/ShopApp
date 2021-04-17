import { Category } from 'src/app/enums/category.enum';

export class Product{
    Id: number;
    Name: string;
    Description: string;
    Price: number;
    Catgory: Category;
    IsAvailable: boolean;
    IsOnCart: boolean;
}
