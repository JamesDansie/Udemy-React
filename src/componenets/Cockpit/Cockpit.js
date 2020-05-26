import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    // with blank dependancies (array), this will only run once.
    useEffect(() => {
        console.log('cockpit [useEffect]')

        //fake http request
        setTimeout(() => {
            alert('loaded!');
        }, 1000);

        return () => {
            // use effect clean up
        }

        // this array sets dependencies
    }, [])

    let assignedClasses = [];

    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
    if(props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
                className={btnClass}
                onClick={props.clicked}>
                    Toggle Person
            </button>
        </div>
    );
};

export default cockpit;