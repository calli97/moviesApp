import Role from "../entity/Role";

const roles = ["user", "admin"];

export const initializeRoles = async () => {
    for (let i = 0; i < roles.length; i++) {
        await Role.upsert(
            { name: roles[i], roleId: i + 1 },
            {
                skipUpdateIfNoValuesChanged: true,
                conflictPaths: ["name"],
            }
        );
    }
    console.log("Roles initialize");
};
