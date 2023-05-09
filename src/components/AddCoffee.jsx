import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleCoffee = e =>{
        e.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee);

        //send data to server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24" >
            <h2 className="text-3xl font-extrabold">Add Coffee</h2>
            <form onSubmit={handleCoffee}>
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" placeholder="Coffee Name" name="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <span>Quantity</span>
                        <input type="text" placeholder="Quantity" name="quantity" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <span>Supplier Name</span>
                        <input type="text" placeholder="Supplier Name" name="supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <span>Taste</span>
                        <input type="text" placeholder="Taste" name="taste" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                <div className="md:flex mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <span>Category</span>
                        <input type="text" placeholder="Category" name="category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <span>Details</span>
                        <input type="text" placeholder="Details" name="details" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                {/* <div className="md:flex"> */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <span>Photo URL</span>
                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block" />
                {/* </div> */}
            </form>
        </div>
    );
};

export default AddCoffee;