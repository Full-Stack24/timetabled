import React from "react";
import Event from './Event';

const Calendar = () => (
  <div className="Calendar">
    Testing the calendar component
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="time">8 am</td>
          <Event event='Starbucks ☕️' color ='green' location='Downtown'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Yolk 🍳' color ='green' location='Central Park'/>
          <td></td>
        </tr>
        <tr>
          <td className="time">9 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Subway 🚊' color ='pink' location='City Center'/>
          <td></td>
          <td></td>
          <Event event='The Bean 🏙️' color ='blue' location='Millennium Park'/>
        </tr>
        <tr>
          <td className="time">10 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Lunch 🍕' color ='blue' location='Restaurant A'/>
          <td></td>
          <td></td>
          <Event event='Coding Session 💻' color ='pink' location='Office'/>
        </tr>
        <tr>
          <td className="time">11 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Team Meeting 💬' color ='green' location='Conference Room'/>
          <td></td>
          <td></td>
          <Event event='Exercise 🏋️' color ='blue' location='Gym'/>
        </tr>
        <tr>
          <td className="time">12 pm</td>
          <Event event='Lunch Break 🥗' color ='green' location='Cafeteria'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Shopping 🛍️' color ='green' location='Mall'/>
          <td></td>
          <td></td>
          <Event event='Relaxation 🛋️' color ='pink' location='Home'/>
        </tr>
        <tr>
          <td className="time">2 pm</td>
          <td></td>
          <Event event='Workout 🏃‍♀️' color ='blue' location='Fitness Studio'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">3 pm</td>
          <td></td>
          <Event event='Movie Time 🎬' color ='green' location='Home Theater'/>
          <td></td>
          <td></td>
          <td></td>
          <Event event='Art Class 🎨' color ='blue' location='Art Studio'/>
          <td></td>
        </tr>
        <tr>
          <td className="time">4 pm</td>
          <td></td>
          <td></td>
          <Event event='Team Building 💪' color ='green' location='Outdoor Park'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="time">5 pm</td>
          <Event event='Socialize with Friends 👫' color ='green' location='Cafe XYZ'/>
          <td></td>
          <td></td>
          <Event event='Gardening 🌷' color ='pink' location='Backyard'/>
          <td></td>
          <td></td>
          <Event event='Outdoor Walk 🌳' color ='blue' location='Nature Trail'/>
        </tr>
        {/* Repeat for other rows */}
      </tbody>
    </table>
  </div>
);

export default Calendar;
