import React from 'react';
import OtherProps from './validation/OtherProps';
// import AllPropsValidation from './validation/AllPropsValidation';
// import InvalidProps from './validation/InvalidProps';
// import ValidProps from './validation/ValidProps';
// import Product from './product/Product';
// import Parent from './Relationship/Parent';
// import OptionalProps from './props/OptionalProps';
// import PassingProps from './props/PassingProps';
// import PropsSpread from './props/PropsSpread';
// import ValueProps from './props/ValueProps';
// import SingleProps from './props/SingleProps';
// import MultipleProps from './props/MultipleProps';


function App() {
  // const randomvalue = 34;
  // const arr = ['React', 'is', 'Library'];
  // const obj ={a:'React', b:'is', c:'Library'};
  return (
    // <>
    //   {/* <SingleProps name="Single Props"/>
    //   <MultipleProps name='Multiple' data='Props'/> */}
    //   <ValueProps 
    //   stringdata="This is a String data"
    //   templatedata= <p>{`This is template data and value: ${randomvalue}`}</p>
    //   numberdata = {23}
    //   booldata ={false}
    //   odjdata ={{name: "Dev"}}
    //   arrdata={['arr1', 'arr2', 'arr3']}
    //   jsxdata={2+2+3+6+7+8+9}
    //   />
    // </>

    // <>
    //   <PassingProps students={['dev', 'dude', 'kunal', 'rohan']}/>
    //   <br/>

    //   <OptionalProps />
    //   <br />
    //   <OptionalProps person="Dev"/>
    //   <br/>

    //   {/* <PropsSpread a="React" b="is" c="Library"/> */}
    //   <br/>
    //   <PropsSpread {...arr}/>     
    //   {/*Array with spread is Not working, no key is there.*/}
    //   <br/>
    //   <PropsSpread {...obj}/>
    // </>

    // <>
    //   {/* <Parent>
    //     <div>
    //       <h1>When, We need to pass child</h1>
    //       <p>We need to create tag component</p>
    //     </div>
    //   </Parent> */}
    //   <Product/>
    // </>

    // <>
    //   {/* <InvalidProps /> */}
    //   {/* <ValidProps /> */}
    // </>

    // <>
    //   <AllPropsValidation />
    // </>

    <>
      <OtherProps />
    </>
  );
}

export default App;