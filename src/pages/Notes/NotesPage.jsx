import React from "react";

export const NotesPage = () => {
  return (
    <nav class="flex-row header-bar">
      <div class="flex-row header-left">
        <i class="material-icons header-icon"> menu </i>

        <h1 class="web-logo" >MonKeep</h1>
      </div>
      <div>
        <i class="material-icons header-icon"> search </i>
        <input type="text" />
      </div>
      <div class="flex-row header-right">
        <span class="material-icons">format_list_bulleted</span>
        {/* <span class="material-icons">grid_view</span> */}
        <div class="flex-row">
          <i class="material-icons header-icon"> dark_mode </i>
          {/* <i class="material-icons header-icon"> light_mode </i> */}
        </div>
        <i class="material-icons header-icon"> account_circle </i>
        <i class="material-icons header-icon"> logout </i>
      </div>
    </nav>
  );
};
