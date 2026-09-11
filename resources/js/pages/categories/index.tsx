
import {Head, router, useForm} from '@inertiajs/react';
import { Category } from '@/types';
import {useState} from 'react';


type CategorywithCount = Category & {products_count: number};

interface Props {
    categories: CategorywithCount[]
}

export default function CategoryIndex({ categories} : Props) {
    const [showForm, setShowForm] = useState(false);
    const [editing, setEditing] = useState<Category | null>(null);

    const {data, setData, post, put, processing, errors, reset} = useForm({
        name:'',
        description: '',
    })

    function openCreate() {
        reset();
        setEditing(null);
        setShowForm(true);
    }

    function openEdit(cat: Category) {
        setData({ name: cat.name, description: cat.description ?? ''});
        setEditing(cat);
        setShowForm(true);
    }

    function closeForm(){
        reset();
        setShowForm(false);
        setEditing(null);
    }

    return (
        <>
         <Head title="Categories"></Head>

        </>
    );
}
CategoryIndex.layout = {
    breadcrumbs: [{ title: 'Categories', href: '/categories' }],
};
