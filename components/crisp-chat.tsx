"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f2d6b0f7-9a97-4f46-9015-25d1d336e7c5");
  }, []);

  return null;
};
