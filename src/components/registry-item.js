import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import supabase from "../services/supabase";

export default function RegistryItem({ item, claimed, onClaimed }) {
  const [showModal, setShowModal] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleClaim() {
    if (!guestName.trim()) return;
    setSubmitting(true);
    setError(null);

    const { error } = await supabase
      .from("registry_claims")
      .insert({ item_id: item.id, guest_name: guestName.trim() });

    if (error) {
      setError("Something went wrong. Please try again.");
      setSubmitting(false);
    } else {
      setShowModal(false);
      setGuestName("");
      setSubmitting(false);
      onClaimed(item.id);
    }
  }

  return (
    <>
      <div className={`registry-card ${claimed ? "claimed" : ""}`}>
        {item.image && (
          <img src={item.image} alt={item.name} className="registry-card-img" />
        )}
        <div className="registry-card-body">
          <h3 className="registry-card-name">{item.name}</h3>
          {item.description && (
            <p className="registry-card-desc">{item.description}</p>
          )}
          <p className="registry-card-price">${item.price}</p>
          <div className="registry-card-actions">
            {item.url && (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="registry-link"
              >
                View item online
              </a>
            )}
            {claimed ? (
              <Button variant="secondary" disabled>
                Claimed
              </Button>
            ) : (
              <Button
                className="registry-claim-btn"
                onClick={() => setShowModal(true)}
              >
                I'll get this
              </Button>
            )}
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Let us know who to thank!</p>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            <Form.Control
              type="text"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Name"
              onKeyDown={(e) => e.key === "Enter" && handleClaim()}
            />
          </Form.Group>
          {error && <p className="registry-error">{error}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            className="registry-claim-btn"
            onClick={handleClaim}
            disabled={submitting || !guestName.trim()}
          >
            {submitting ? "Claiming..." : "Confirm"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
