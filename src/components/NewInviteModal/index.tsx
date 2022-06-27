import { Container } from "./styles";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { FormEvent, useState, useContext } from "react";
import { InvitesContext } from "../../LeadsContext";

interface NewInviteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewInviteModal({
  isOpen,
  onRequestClose,
}: NewInviteModalProps) {
  const { createInvite } = useContext(InvitesContext);
  const [leadFirstName, setFirstName] = useState("");
  const [leadLastName, setLastName] = useState("");
  const [leadSuburb, setSuburb] = useState("");
  const [leadZipCode, setZipCode] = useState("");
  const [leadCategory, setCategory] = useState("");
  const [leadDescription, setDescription] = useState("");
  const [leadPhoneNumber, setPhoneNumber] = useState("");
  const [leadEmailAddress, setEmailAddress] = useState("");
  const [leadPrice, setPrice] = useState(0);

  async function handleCreateNewInvite(event: FormEvent) {
    event.preventDefault();

    await createInvite({
      leadFirstName,
      leadLastName,
      leadSuburb,
      leadZipCode,
      leadCategory,
      leadDescription,
      leadPhoneNumber,
      leadEmailAddress,
      leadPrice,
    });

    setFirstName("");
    setLastName("");
    setSuburb("");
    setZipCode("");
    setCategory("");
    setDescription("");
    setPhoneNumber("");
    setEmailAddress("");
    setPrice(0);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewInvite}>
        <h2>New invite</h2>

        <input
          type="text"
          placeholder="First name"
          value={leadFirstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Last name"
          value={leadLastName}
          onChange={(event) => setLastName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Suburb"
          value={leadSuburb}
          onChange={(event) => setSuburb(event.target.value)}
        />
        <input
          type="text"
          placeholder="ZipCode"
          value={leadZipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={leadCategory}
          onChange={(event) => setCategory(event.target.value)}
        />
        <textarea
          placeholder="Description"
          value={leadDescription}
          onChange={(event) => setDescription(event.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone"
          value={leadPhoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={leadEmailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />
        <input
          type="number"
          min="1"
          step="any"
          placeholder="Price"
          value={leadPrice}
          onChange={(event) => setPrice(Number(event.target.value))}
        />

        <button type="submit">Send</button>
      </Container>
    </Modal>
  );
}
