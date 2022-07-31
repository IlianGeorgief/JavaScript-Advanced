// function systemComponents(data) {
//     let parseData = data.reduce((db, componentData) => {
//         let [systemName, componentName, subcomponentName] = componentData.split('|').map(x => x.trim());

//         if (!db[systemName]) {
//             db[systemName] = { [componentName]: [subcomponentName] };
//             return db;
//         }

//         if (!db[systemName][componentName]) {
//             db[systemName][componentName] = [subcomponentName];
//             return db;
//         }

//         db[systemName][componentName] = [...db[systemName][componentName], subcomponentName];

//         return db;
//     }, {});

//     let sortedSystem = Object.keys(parseData).sort((a, b) =>
//         Object.keys(parseData[b]).length - Object.keys(parseData[a]).length || a.localeCompare(b)
//     );

//     console.log(parseData)
// }

function solve(array) {

    let register = {};

    array.forEach(line => {

        let [systemName, componentName, subcomponentName] = line.split(' | ');

        if (!register[systemName]) {

            register[systemName] = {};

            register[systemName][componentName] = [];

            register[systemName][componentName].push(subcomponentName);

        } else if (register[systemName] && !register[systemName][componentName]) {

            register[systemName][componentName] = [];

            register[systemName][componentName].push(subcomponentName);

        } else {

            register[systemName][componentName].push(subcomponentName);

        }

    })



    // Order the systemsName in register by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria

    // as string [] only keys



    // let sortedSystemsName = Object.keys(register).sort((a, b) => {

    //     if (Object.keys(register[b]).length > Object.keys(register[a]).length) {

    //         return 1;

    //     } else if (Object.keys(register[b]).length === Object.keys(register[a]).length) {

    //         return a.localeCompare(b);

    //     } else {

    //         return -1;

    //     }

    // });





    sortedSystemsName = Object.entries(register).sort(([systemNameA, componentsA], [systemNameB, componentsB]) => {

        return Object.values(componentsB).length - Object.values(componentsA).length || systemNameA.localeCompare(systemNameB);

    });



    sortedSystemsName.forEach(([currentSystemName, components]) => {

        console.log(currentSystemName); // as string



        let componentCollection = Object.entries(components);

        // let sortedComponentsBySubcomponentsLength = Object.keys(register[currentSystemName]).sort((a, b) =>

        //     Object.keys((register[currentSystemName][b]).length - Object.keys((register[currentSystemName][a].length))));



        let sortedComponents = componentCollection

            .sort(([componentNameA, subcompenentsA], [componentNameB, subcompenentsB]) => subcompenentsB.length - subcompenentsA.length);



        // sortedComponentsBySubcomponentsLength.forEach((currentComponent => {

        //     console.log(`|||${currentComponent}`); // as string



        //     register[currentSystemName][currentComponent].forEach(subcomponent => console.log(`||||||${subcomponent}`));

        // }));



        sortedComponents.forEach((([conName, subCollection]) => {

            console.log(`|||${conName}`); // as string



            subCollection.forEach(sub => console.log(`||||||${sub}`));

        }));

    });

}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security']
)