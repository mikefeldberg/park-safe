import React from 'react';
import Application from '../Application/Application'
import styles from './Applications.module.css';

const Applications = (props) => {
    return (
        <React.Fragment>
            {props.applications && 
                <React.Fragment>
                    <div className={styles.applicationContainer}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm">Date</div>
                                <div className="col-sm">Application</div>
                                <div className="col-8">Note</div>
                                <div className="col-1">Edit</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.applicationContainer}>
                        {props.applications.map((application, idx) =>
                            <Application
                                name={application.name}
                                phone={application.phone}
                                email={application.email}
                                ageRange={application.ageRange}
                                gender={application.gender}
                                applicationId={application._id}
                                key={idx}
                                handleApplicationUpdate={props.handleApplicationUpdate}
                            />
                        )}
                    </div>
                </React.Fragment>
            }
        </React.Fragment>
    );
}
 
export default Applications;