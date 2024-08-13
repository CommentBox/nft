document.getElementById('viewDetailsButton').onclick = function() {
    document.getElementById('nftModal').style.display = 'block';
}

document.getElementById('buyNowButton').onclick = function() {
    document.getElementById('nftModal').style.display = 'block';
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('nftModal').style.display = 'none';
}

document.getElementById('placeBidButton').onclick = function() {
    alert('Bid placed!');
    document.getElementById('nftModal').style.display = 'none';
}

document.getElementById('connectWalletButton').onclick = function() {
    document.getElementById('walletModal').style.display = 'block';
}

document.getElementById('closeWalletModal').onclick = function() {
    document.getElementById('walletModal').style.display = 'none';
}

document.getElementById('connectWallet').onclick = function() {
    alert('Wallet connected!');
    document.getElementById('walletModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}
