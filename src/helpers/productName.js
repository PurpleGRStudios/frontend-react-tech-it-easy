// moet string terug krijgen die aangeeft wat de merk, type en naam van een tv is
// eerst uitvinden wat de merk, type en naam geven
// testen of ik het gewoon kan callen


function productName(tv) {
    return (`${tv.brand}, ${tv.type}, ${tv.name}`);
}

export default productName;