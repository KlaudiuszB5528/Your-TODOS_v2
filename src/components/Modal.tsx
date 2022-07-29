import { useId } from "react";
import ReactDom from "react-dom";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
  onSubmit: (
    project: string,
    title: string,
    description: string,
    dueDate: Date,
    id: string
  ) => void;
}

export const Modal: React.FC<Props> = (props) => {
  if (!props.isModalOpen) return null;
  const id = useId();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const project =
      document.querySelector(".todos-page__project-title")?.textContent || "";
    const title = target.elements.item(0) as HTMLInputElement;
    const description = target.elements.item(1) as HTMLInputElement;
    const dueDate = target.elements.item(2) as HTMLInputElement;
    props.onSubmit(
      project,
      title.value,
      description.value,
      new Date(dueDate.value),
      id
    );
    props.closeModal();
  };

  const year: number = new Date().getFullYear();
  const month: string | number =
    new Date().getMonth() < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth();
  const day: string | number =
    new Date().getDate() < 10
      ? `0${new Date().getDate()}`
      : new Date().getDate();

  const defaultDate: string = `${year}-${month}-${day}`;

  return ReactDom.createPortal(
    <>
      <div className="overlay" onClick={props.closeModal}></div>
      <div className="modal">
        <div className="modal__content">
          <form id="modal__form" action="" onSubmit={handleSubmit}>
            <div className="modal__input-box">
              <input type="text" maxLength={17} required />
              <label htmlFor="title">Title</label>
            </div>
            <div className="modal__input-box">
              <textarea maxLength={200} required />
              <label htmlFor="description">Description</label>
            </div>
            <div className="modal__input-box date">
              <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                required
                min={defaultDate}
                defaultValue={defaultDate}
              />
            </div>
          </form>
        </div>
        <button className="modal__close-btn" onClick={props.closeModal}>
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
        <button type="submit" form="modal__form" className="modal__submit-btn">
          Confirm
        </button>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};
