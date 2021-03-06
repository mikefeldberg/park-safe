import React from 'react';
import Application from '../Application/Application'

const Applications = (props) => {
    return (
        <React.Fragment>
            {props.applications && 
                <React.Fragment>
                    <div>
                        <div className="container">
                            <div className="row text-center mb10">
                                <strong className="col-3 text-left">Name</strong>
                                <strong className="col-2">Phone</strong>
                                <strong className="col-1">Gender</strong>
                                <strong className="col-2">Age Group</strong>
                                <strong className="col-1">High Priority</strong>
                                <strong className="col-2">Submitted On</strong>
                                <strong className="col-1">
                                    <span>View</span>
                                    <span> | </span>
                                    <span>Download</span>
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        {props.applications.map((application, idx) =>
                            <Application
                                application={application}
                                nameFirst={application.nameFirst}
                                nameLast={application.nameLast}
                                phone={application.phone}
                                ageRange={application.ageRange}
                                gender={application.gender}
                                highPriority={application.highPriority}
                                applicationId={application._id}
                                createdAt={application.createdAt}
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