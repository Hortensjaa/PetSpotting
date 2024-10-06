import {ChangeEvent, useState} from "react";

const AddPetForm = () => {
    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState<string>('');
    const [species, setSpecies] = useState<string>('DOG');
    const [description, setDescription] = useState<string>('');

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target?.files[0]);
        }
    };

    const handleUpload = async () => {
        if (file) {
            console.log('Uploading file...');
            const formData = new FormData();
            formData.append('name', name);
            formData.append('species', species);
            formData.append('description', description);
            formData.append('image', file);

            try {
                const res = await fetch('api/pets', {
                    method: 'POST',
                    body: formData,
                });
                const resJson = await res.json();
                console.log(resJson);

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <>
            <div className="input-group">
                <input type="text" value={name} onChange={e => setName(e.target.value)}/>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                <input id="file" type="file" onChange={handleFileChange} />
            </div>
            {file && (
                <section>
                    File details:
                    <ul>
                        <li>Name: {file.name}</li>
                    </ul>
                </section>
            )}

            {file && (
                <button onClick={handleUpload} className="submit">
                    Upload a file
                </button>
            )}
        </>
    );
};

export default AddPetForm