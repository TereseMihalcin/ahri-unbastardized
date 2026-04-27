import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import RegistryItem from "../components/registry-item";
import registryItems from "../data/registry-items";
import supabase from "../services/supabase";
import "../styles/registry.css";

export default function Registry() {
  const [claimedIds, setClaimedIds] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClaims() {
      const { data } = await supabase.from("registry_claims").select("item_id");
      if (data) {
        setClaimedIds(new Set(data.map((row) => row.item_id)));
      }
      setLoading(false);
    }
    fetchClaims();
  }, []);

  function handleClaimed(itemId) {
    setClaimedIds((prev) => new Set([...prev, itemId]));
  }

  return (
    <Container className="registry">
      <h2 class="text-center">Registry</h2>
      {loading ? (
        <p className="registry-loading">Loading...</p>
      ) : (
        <div className="registry-grid">
          {registryItems.map((item) => (
            <RegistryItem
              key={item.id}
              item={item}
              claimed={claimedIds.has(item.id)}
              onClaimed={handleClaimed}
            />
          ))}
        </div>
      )}
    </Container>
  );
}
