import db from "../models/index";

let getAllSpecialties = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialties = await db.Specialty.findAll();
            if (!specialties) {
                resolve(e);
            } else {
                resolve(specialties);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createSpecialties = (specId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checlSpecialties = db.Specialty.findOne({
                where: { id: specId }
            });
            if (!checlSpecialties) {
                await db.Sequelize.create({
                    name: data.name,
                    description: data.description,
                    image: data.image,
                });
                resolve({
                    errCode: 0,
                    errMessage: "Create specialy success"
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "This specialty is already created"
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

let editSpecialties = () => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let deleteSpecialties = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialty = await db.Specialty.findOne({
                where: { id: id }
            })
            if (specialty) {
                await db.Specialty.destroy({
                    where: { id: id }
                })
                resolve({
                    errCode: 0,
                    errMessage: "Delete Specialty success"
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: "Can't find any Specialty with that id"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getAllSpecialties: getAllSpecialties,
    createSpecialties: createSpecialties,
    editSpecialties: editSpecialties,
    deleteSpecialties: deleteSpecialties,
}