import { users, users2 } from "../test-scripts/arrays";

test("Existe algun estudiante llamado Santiago?",()=>{
    expect(users).toContain("Santiago");
})

test("Existe algun estudiante llamado Santiago?",()=>{
    expect(users2).toContainEqual({name:"Santiago"});
})
