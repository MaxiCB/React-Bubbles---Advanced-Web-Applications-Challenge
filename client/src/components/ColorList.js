import React, { useState } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = props => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [newColor, setNewColor] = useState(initialColor);
  const fetchColors = props.fetch;

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        fetchColors();
      })
      .catch(err => console.log(err));
  };

  const saveColor = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/colors", newColor)
      .then(res => fetchColors())
      .catch(err => console.log(err))
  }

  const deleteColor = color => {
    axiosWithAuth()
      .delete(`http://localhost:5000/api/colors/${color.id}`)
      .then(res => {
        fetchColors();
      })
      .catch(err => {});
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {props.colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <div>
          <form onSubmit={saveEdit}>
            <legend>edit color</legend>
            <label>
              color name:
              <input
                onChange={e =>
                  setColorToEdit({ ...colorToEdit, color: e.target.value })
                }
                value={colorToEdit.color}
              />
            </label>
            <label>
              hex code:
              <input
                onChange={e =>
                  setColorToEdit({
                    ...colorToEdit,
                    code: { hex: e.target.value }
                  })
                }
                value={colorToEdit.code.hex}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        </div>
      )}
      <div className="spacer">
      <form onSubmit={saveColor}>
            <legend>add color</legend>
            <label>
              color name:
              <input
                onChange={e =>
                  setNewColor({ ...newColor, color: e.target.value })
                }
                value={newColor.color}
              />
            </label>
            <label>
              hex code:
              <input
                onChange={e =>
                  setNewColor({
                    ...newColor,
                    code: { hex: e.target.value }
                  })
                }
                value={newColor.code.hex}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default ColorList;
