Working of our project 'LetsGo'
---------------------------------------------------

Due to some issues in storing data and retrieving it, we make use of static data's.

1. Login Page
   Login with credentials(username and password) link:  http://localhost:3000/
   
   ```
   git clone 'https://github.com/Aparna-Bindhu/solana-ride-sharing.git'
   cd foldername
   npm install
   npm start
   ```

2. Entering into Ride Taker or Ride Giver selection page. Before that you have agree a QUICK RIDER'S PLEDGE.
   Then you can see two option whether you need to take a ride or give a ride. http://localhost:3001/ridetakerorgiver (only work when you login)
   
   credentials
   ------------------------------
   * Ride Taker: username: ridetaker@admin.com  password: ridetaker
   * Ride Giver: username: ridegiver@admin.com  password: ridegiver
   * Both      : username: admin@admin.com      password: admin

3. If you are a Ride Taker : click Ride Taker button, then you have input some information's like 
                                                      *Whether you need a 4 wheeler or 2 wheeler.
                                                      *Start and Drop location
                                                      *Date and Time
                                                      *No: of seats want to book (only for 4 wheeler).

4. If you are a Ride Giver : click Ride Giver button, then you have input some information's like
                                                      * Vehicle Name
                                                      * Vehicle registration number 
                                                      * Whether you need a 4 wheeler or 2 wheeler.
                                                      * Start and Drop location
                                                      * Date and Time
                                                      * No: of seats want to book (only for 4 wheeler).

5. After providing the information you can click continue button for further process. A popup display when you click the continue button which says about the COVID-19 info's, you can be a safe ride taker or giver by clicking button 'I am a safe ride taker' or 'I am a safe ride giver'.

6. If a ride taker click the 'I am a safe ride taker' button then list the ride givers around you with the same date, time and locations. you can request them for a ride by clicking the request button.

7. The Ride Giver can see these request in the 'Ride Taker or Ride Giver selection page' nav-bar named 'Ride Taker Request List'. The Ride Giver can accept or decline the request's.

8. If the Ride Giver accept the request, the Ride Taker can see these accept detail's in the 'Ride Taker or Ride Giver selection page'  nav-bar named 'Ride Giver Accept List' with payment button. There are two conditions  
                                    * Until the ride giver accept your request the payment button get disabled.
                                    * The ride taker request is shown in the same page with disabled requested button.

9. After completing the ride the payment can be done.
