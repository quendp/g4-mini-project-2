import React from "react";
import AdminNavigations from "./AdminNavigations/AdminNavigations";

const Admin = () => {

   /*
    Feedback - Feb/25/2023 - Quen DP 
    
    Good day!

      Nice work sir! It works perfectly on my end. I just have a few suggestions in order for us to maintain a cleaner and more concise code.

      For all files:
      - Avoid using transition all in your css transitions because it causes more gpu consumption. Instead, you can specify the transition property.
      - Always check for repetitive codes. If a codeblock or even an entire file seems to be repeating, try to refactor you code.
      - Use the custom variables in the index.css file for the colors in you css to keep our styling uniform. the colors are the variables that starts with "--clr". You can use it like this:
      color: var(--clr-accent-lights);
      - There is no need to put a "row" inside of another "row" if they have no sibling elements. For example: the line 8 and line 10 of AdminCardSectionTwo, and others.
      - Specify the names of the MOCK-DATA files. You can tell in the filename with kind of data it contains. For example: MOCK_BOOKINGS_TABLE
      - Avoid using ternary operator if it gets too long. If the block exceeds three conditions, just use the traditon if () else if() instead.

      I. AdminNavigations
        1. Create an onSubmit function that will get the value of the search query in AdminTopNav.jsx and pass it to the main component Admin.jsx. For now, just console.log the value from Admin.jsx
        2. The conditional rendering in line 86 to line 89 of AdmiSidebar.jsx should be in the AdminNavigations.jsx. So that, we can keep the sidebar with just the sidebar and let the navigations component handle the navigation. You can use props to do it.
        3. Your code seems to be repeating on line 38 to 83 of AdminSidebar.jsx. You can use map to avoid it and just make a function to handle the different values such as the fa icons, the onclick function etc. You can refer to this link to see an example of how it can be implemented. Just ignore the react dom components in this example: https://github.com/quendp/g4-mini-project-2/blob/ticket-25-Home-heroSection/client/src/components/Header/HeaderExpanded/HeaderNavMenu.jsx
        4. Change the background color of the active link in sidebar because it is always focused on the dashboard.
        6. Add another section in the bottom of the sidebar for settings and account informaton.

      II. AdminDashboard
        1. The title "monthly report" seems to be misplaced because it is in the AdminCardSectionOne code-wise but the UI suggests that it refers to AdminCardSectionTwo. You can also add a title on top of AdminCardSectionOne saying something like "General overview" or something.
        2. Increase the height of the cards and decrease the widht a little bit. 
        3. Put the numbers on the center and put the icons beside the title. For example:
                15000
          -----------------
          <icon > Users
        4. Decrease the widts of the charts and put just a tiny amount of spacing between them.
        5. Show all the lines in the line graph as default instead of just the cosmopolitan lights only.
        5. Put the chart data in your AdminDataCollection directory

      III. Bookings and Agents Table
        1. Most functions in your Bookings and Agents Table are similar or almost similar. For example:
          - BookingsGlobalFiltering is almost similar to AgentsGlobalFiltering
          - AdminBookingsTable is almost similar to AdminAgentsTable
          - You can also use the pagination in BookingsPagination to the AgentsPagination.
          - Same thing with other parts of the table..

          As a suggestion, you can create a separate directory called "AdminTables" with a main component called "AdminTables.jsx" (you can also put there css in AdminTables.css) where you can put all the table components and functions and just use props, and props.children to pass different values. I created something (almost) similar to that in in the components/UserAuthentication directory and components/FormUI directory if you need some references.

        2. Look for similar styling and your css files and just use the same classnames for their elements. You can then just put their styles in a parent directory, or to a separate folder. For example (do  the same for other parts/files):

        (this one: AdminBookingsTable.css)
        ..admin-bookings__table {
            font-family: var(--ff-body-regular);
            border-collapse: collapse;
            width: 100%;
          }

          .admin-bookings__table td,
          .admin-bookings__table th {
            border: 1px solid #ddd;
            padding: 8px;
          }

          (and this one: AdminAgentsTable.css)
          .admin-agents__table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }

          .admin-agents__table td,
          .admin-agents__table th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
        3. Decrease the widths of the table
      
      IV. AdminPackageSection 
        1. Just create 1 component in the AdminDestinationList directory since they are all doing the same thing. You can just use props get the values you want.

        2. Instead of icons, in the AdminPackageCard component, use the images in the assets/images/hero-section-thumbnails (use the images with "poster in the filename") directory for each category. You can also increase the widths of each card and just use flex wrap to keep them aligned.
        
        3. Decrease the width of the accordion a little bit.

        4. Put the "back" button on top of the page instead of putting it at the bottom.

        5. Just like the one in the Agents table, add a modal pop up when a package is clicked. You can also keep it empty for now.


    
    I think that's all for now. I apologize if it became too long because of the details and examples. Anyway, you did a very very great job and I truly appreciate your efforts in doing this. Feel free to ask me if you have any questions or clarifications.

    Thank you very much and have a nice day!

    - Quen DP
    */


  return (
    <div className="admin">
      <AdminNavigations />
    </div>
  );
};

export default Admin;
