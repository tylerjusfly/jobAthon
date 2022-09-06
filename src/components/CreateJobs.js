import React from 'react';

export const CreateJobs = () => {
  return (
    <div>
      <form>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="position" placeholder="positoon" />
        <input type="text" name="location" placeholder="locate" />
        <input type="text" name="type" placeholder="type" />
        <input type="text" name="company" placeholder="comp" />
        <input type="text" name="tags" placeholder="tags" />
        <input type="text" name="description" placeholder="desc" />
      </form>
    </div>
  );
};
