<div class="modal-overlay" id="modal-overlay"></div>;
<div class="modal-container" id="modal-container"></div>;

const displayCart = () => {
    const modalHeader = document.createElement("div");
    
    const modalClose = document.createElement("div");
    modalClose.innerText= "❌"
    modalClose.className = "modal-close";
    modalHeader.append(modalClose);

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "Cart";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);
};