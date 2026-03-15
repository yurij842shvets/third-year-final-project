import { categories } from "./data"
import './MainPage.css'

export default function Categories() {
    return (


        <select name="" id="" className={'category'}>

            <option value="" disabled hidden selected>Категорія товару</option>
            {categories.map(c => (
                <option value="" key={c.id}>
                    {c.name}
                </option>
            ))}
        </select>
    )
}