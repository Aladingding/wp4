
// function getComponent() {
//     // var element = document.getElementById('root');
//
//      return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//         return element;
//
//       }).catch(error => 'An error occurred while loading the component');
//
// }

const el = document.getElementById('root');
el.innerHTML = 'Click me';
el.onclick = ()=>{
    /// console.log(1111);

    import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        //         var element = document.createElement('div');
        //
        //         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        //
        //         return element;
        //
        //       }).catch(error => 'An error occurred while loading the component');
       var d = _.join(['Hello', 'webpack'], ' ');
       var child = document.createElement('div');
       child.innerHTML = d;
       console.log(d);
       el.appendChild(child);
    })
}

// setTimeout(()=>{
//     getComponent().then(component => {
//         document.body.appendChild(component);
//     })
// },5000)




// 7.0.0-0