import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";

import styles from "../../styles/productDialog.module.css";

import Select from "react-select";
import * as Yup from "yup";
import Image from "next/image";

import axios from "axios";
export default function ImageDialog({ show, handleClose, url1, url2, url3 }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Images</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="advt-post bg-gray py-5">
            <img src={url1} alt="" width={200} />
            <img src={url2} alt="" width={200} />
            <img src={url3} alt="" width={200} />
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
