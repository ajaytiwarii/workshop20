import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { fade } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.css'

const useStyles = makeStyles((theme) => ({
    roots: {
        display: 'grid',
        gridTemplateColumns: '[grow] 300px  [content] 1000px ',
        gridColumnGap: '20px',


        backgroundColor: 'white',
    },
    grow: {

        gridColumn: 'grow ',
        backgroundColor: 'lightBlue',

    },
    content: {

        justifyContent: 'end',
        gridColumn: 'content ',

    },

    root: {
        display: 'flex',
        flexDirection: 'row',
        height: '80px',
        paddingTop : '10px',
    },


    content: {

        backgroundColor: 'blueGrey',

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    tables: {

        display: 'flex',
        flexDirection: 'row',
    },

    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },





    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '15',
        fontWeight: 'bold',
        paddingLeft: '10px',
    },
    pos: {
        marginBottom: 12,
    },

}));
//   export default function OutlinedCard()
export default function PrimarySearchAppBar() {
    const classes = useStyles();



    return (
        <div className={classes.roots}>
            <div className={classes.grow}>
                <Typography className={classes.title} variant="p" noWrap>
                    Patients
          </Typography>
                <Typography>
                    <input style={{ marginLeft: '10px', marginRight: '10px', width: '270px', height: '20px', fontSize: '12px', marginTop: '10px', marginBottom:'10px' }} type="text" placeholder="Search Patient" />
                </Typography>

                <Card variant="outlined">

                    <CardContent className={classes.root} >

                        <Typography className={classes.img1} variant="body2" component="p">
                            <img style={{ width: "50px", height: "50 px", alignSelf: 'flex-start' }} src="https://previews.123rf.com/images/get4net/get4net1802/get4net180200635/94675570-female-user-profile-isolated-on-blue-circular-background-.jpg" />

                        </Typography>


                        <Typography className={classes.text} color="textSecondary" >
                            <p>Sara Smith</p>
                            <p>15 Aug 2020</p>
                        </Typography>
                        <Typography className={classes.img2} variant="body2" component="p">
                            <img style={{ width: "10px", height: "10 px", marginLeft: '105px' }} src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" />


                        </Typography>





                    </CardContent>
                </Card>
                <Card variant="outlined">

                    <CardContent className={classes.root} >


                        <Typography className={classes.img1} variant="p" component="p">
                            <img style={{ width: "50px", height: "50 px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRv6dZvShX3_LSqgdJdwYZDL6MsrHYy5tjioGjaSFan1RfjUNJVi_A4PdSC-jUs_VxfDo&usqp=CAU" />

                        </Typography>




                        <Typography className={classes.text} color="textSecondary" gutterBottom>
                            <p>James Johnson</p>
                            <p> No Clearance</p>
                        </Typography>
                        <Typography className={classes.img2} variant="body2" component="p">
                            <img style={{ width: "20px", height: "20 px", marginLeft: '78px' }} src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2016_14/1038571/red-dot-puzzle-tease-today-160406-1038571.JPG" />


                        </Typography>

                    </CardContent>

                </Card>
                <Card >


                    <CardContent className={classes.root} variant="outlined">

                        <Typography className={classes.img1} variant="body2" component="p">
                            <img style={{ width: "50px", height: "50 px" }} src="http://arunoommen.com/wp-content/uploads/2017/01/man-2_icon-icons.com_55041.png" />
                        </Typography>

                        <Typography className={classes.text} color="textSecondary" gutterBottom>
                            <p>Patrice Page</p>
                            <p> 19 Aug 2020</p>

                        </Typography>
                        <Typography className={classes.img2} variant="body2" component="p">
                            <img style={{ width: "10px", height: "10 px", marginLeft: '110px' }} src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" />


                        </Typography>



                    </CardContent>

                </Card>
                <Card >


                    <CardContent className={classes.root} variant="outlined">

                        <Typography className={classes.img1} variant="body2" component="p">
                            <img style={{ width: "50px", height: "50 px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7ZHHUdN_3p6I5EAb0khNR1ESNmRw_z-vLgs-qma5nH4xSxAGC38uSZ9rldLMUTmGkfw&usqp=CAU" />
                        </Typography>



                        <Typography className={classes.text} color="textSecondary" gutterBottom>
                            <p>Derek Diamon</p>
                            <p>21 Aug 2020</p>

                        </Typography>
                        <Typography className={classes.img2} variant="body2" component="p">

                            <img style={{ width: "10px", height: "10 px", marginLeft: '105px' }} src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Basic_green_dot.png" />


                        </Typography>


                    </CardContent>

                </Card>
            </div>
            <div className={classes.content}>


                <p>Patient Information</p>
                <p style={{ marginLeft: '80%' }}>Last Updated 10:25,today</p>
                <div style={{ width: '1000px', height: '0px', display: 'flex' }}>
                    <img style={{ width: "100px", height: "100 px", alignSelf: 'flex-start' }} src="https://previews.123rf.com/images/get4net/get4net1802/get4net180200635/94675570-female-user-profile-isolated-on-blue-circular-background-.jpg" />
                    <h6 style={{ marginTop: '40px' }}>Sara Smith</h6>


                </div>

                <div style={{ display: 'flex', flexDirection: 'row' }} className="tables">
                    <div style={{ marginLeft: '20px' }} className="table1">
                        <table >
                            <thead>


                                <tr>
                                    <th scope="col">Phone</th>
                                    <th scope="col">302-857-9685</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>sarasmith@gmail.com</td>

                                </tr>
                                <tr>
                                    <th scope="row">Gender</th>
                                    <td>Female</td>

                                </tr>
                                <tr>
                                    <th scope="row">Age</th>
                                    <td>45</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginLeft: '40px' }} className="table2">
                        <table >
                            <thead>
                                <h1></h1>
                                <tr>
                                    <th scope="col">Surgery Type</th>
                                    <th scope="col">Rotator Cuff Repair</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Suregery Date</th>
                                    <td>15 Aug 2020</td>

                                </tr>
                                <tr>
                                    <th scope="row">Height(cm)</th>
                                    <td>163</td>

                                </tr>
                                <tr>
                                    <th scope="row">Weight(lb)</th>
                                    <td>110</td>

                                </tr>
                                <tr>
                                    <th scope="row">BMI</th>
                                    <td>19</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ marginLeft: '40px' }} className="table3">
                        <table >
                            <thead>

                                <tr>
                                    <th scope="col">Anesthesiologist</th>
                                    <th scope="col">Dr.Christina Hardaway</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Anesthesiologist Phone</th>
                                    <td>301-896-8745</td>

                                </tr>
                                <tr>
                                    <th scope="row">Anesthesiologist Email</th>
                                    <td>christina@h3a.com</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <table className="table4">
                        <thead style={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>

                            <tr>
                                <th scope="col">First Time Surgery</th>

                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: 'lightgrey' }}>
                            <tr>
                                {/* <th scope="row">Anesthesiologist Phone</th> */}
                                <td>No</td>

                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="table5">
                        <thead style={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>

                            <tr>
                                <th scope="col">Family History Of Surgical Complications?</th>

                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: 'lightgrey' }}>
                            <tr>
                                {/* <th scope="row">Anesthesiologist Phone</th> */}
                                <td>Yes</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <div>
                    <table className="table6">
                        <thead style={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>

                            <tr>
                                <th scope="col">If yes, please provide more details</th>

                            </tr>
                        </thead>
                        <tbody style={{ backgroundColor: 'lightgrey' }}>
                            <tr>
                                {/* <th scope="row">Anesthesiologist Phone</th> */}
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
                <p>Previous Surgeries</p>
                <table className="table7">
                    <thead style={{ backgroundColor: 'lightblue', paddingTop: '20px' }}>

                        <tr>
                            <th scope="col">Surgery Type</th>
                            <th scope="col">Date</th>
                            <th scope="col">Anesthesia Type</th>
                            <th scope="col">Surgical Complications</th>
                            <th scope="col">Anesthesia Complications(nausea,vomiting, difficult intubation</th>

                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'lightgrey' }}>
                        <tr>
                            <th scope="row">Shoulder reconstruction</th>
                            <td>January 2008</td>
                            <td>General"Breathing Tube"</td>
                            <td>No</td>
                            <td>No</td>

                        </tr>

                    </tbody>
                </table>
                <button style={{ backgroundColor: 'lightblue', paddingTop: '20' }}>+ Add Surgery</button>
            </div>

        </div>



    );
}