<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Me's Keys - NFT Auction</title>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Press Start 2P', cursive;
            background-color: #000;
            color: #00ff00;
            overflow-x: hidden;
            margin: 0;
            padding-bottom: 60px; /* Ensure space for banner */
        }

        .custom-bg {
            background-color: #000;
        }

        .custom-header {
            background-color: #1a1a1a;
            border-bottom: 1px solid #00ff00;
        }

        .custom-button {
            background-color: #00ff00;
            color: #000;
        }

        .custom-button:hover {
            background-color: #33ff33;
        }

        .custom-table thead th {
            border-bottom: 1px solid #00ff00;
        }

        .custom-table tbody tr {
            border-bottom: 1px solid #00ff00;
        }

        .custom-table tbody tr:last-child {
            border-bottom: none;
        }

        input::placeholder {
            color: #00ff00;
        }

        @media (max-width: 640px) {
            .custom-header {
                flex-direction: column;
                align-items: flex-start;
            }

            .header-content {
                order: 1;
                width: 100%;
                margin-bottom: 0.5rem;
                text-align: left;
            }

            .header-buttons {
                order: 2;
                width: 100%;
                margin-bottom: 0.5rem;
                display: flex;
                justify-content: space-between;
            }

            .search-input {
                flex: 1 1 auto;
            }

            .top-right {
                order: 3;
                width: 100%;
                text-align: right;
            }
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 2000; /* Ensure it stays above other content */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0, 0, 0, 0.8);
            box-sizing: border-box;
        }

        .modal-content {
            background-color: #1a1a1a;
            margin: 5% auto; /* Adjusted for better centering */
            padding: 20px;
            border: 1px solid #00ff00;
            width: 90%;
            max-width: 600px;
            box-sizing: border-box;
            position: relative;
        }

        .modal-close {
            color: #00ff00;
            float: right;
            font-size: 28px;
            font-weight: bold;
            cursor: pointer;
        }

        .modal-close:hover,
        .modal-close:focus {
            color: #33ff33;
            text-decoration: none;
        }

        /* Ensure smooth scrolling */
        html {
            scroll-behavior: smooth;
        }

        /* Banner Styles */
        .banner {
            width: 100%;
            height: 60px;
            overflow: hidden;
            position: fixed;
            bottom: 0;
            background-color: black;
            border-top: 2px solid lime;
            display: flex;
            align-items: center;
            box-shadow: 0 0 10px lime;
            box-sizing: border-box;
            z-index: 1000; /* Ensure it stays above other content */
        }

        .banner-text {
            font-family: 'Press Start 2P', cursive;
            font-size: 1.5rem;
            color: lime;
            white-space: nowrap;
            animation: scroll-left 20s linear infinite;
            padding-left: 100%; /* Start off-screen */
        }

        @keyframes scroll-left {
            from {
                transform: translateX(0);
            }
            to {
                transform: translateX(-100%);
            }
        }

        @media (max-width: 600px) {
            .banner {
                height: 40px;
            }

            .banner-text {
                font-size: 1rem;
            }
        }
    </style>
</head>

<body class="custom-bg">
    <div class="container mx-auto p-4">
        <header class="custom-header flex justify-between items-center mb-4 p-4 rounded flex-wrap">
            <div class="header-content text-green-500 font-bold text-xl">Me's Keys Auction</div>
            <div class="flex space-x-4 items-center header-buttons flex-wrap">
                <input type="text" placeholder="Search NFTs, wallets, or ENS" class="search-input p-2 rounded bg-gray-800 text-green-500 border border-gray-600">
            </div>
            <div class="top-right">
                <button class="custom-button px-4 py-2 rounded" id="connectWalletButton">Connect</button>
            </div>
        </header>
        <main class="grid grid-cols-1 lg:grid-cols-3 gap-4 pb-12"> <!-- Added padding-bottom -->
            <div class="lg:col-span-1">
                <img src="https://via.placeholder.com/400" alt="Me's Key NFT" class="rounded w-full cursor-pointer" id="viewDetailsButton">
                <button class="custom-button w-full py-2 mt-2 rounded" id="buyNowButton">Buy Now 0.75 <i class="fab fa-ethereum"></i></button>
            </div>
            <div class="lg:col-span-2">
                <h1 class="text-2xl font-bold mb-2">Me's Key #001</h1>
                <p class="text-gray-400 mb-4">Unique NFT Collection</p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Price</p>
                        <p class="text-green-500">0.75 <i class="fab fa-ethereum"></i></p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Last Sale</p>
                        <p class="text-green-500">1.8649 <i class="fab fa-ethereum"></i></p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Top Bid</p>
                        <p class="text-green-500">0.58 <i class="fab fa-ethereum"></i></p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Rarity</p>
                        <p class="text-green-500">595</p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Collection Floor</p>
                        <p class="text-green-500">0.64 <i class="fab fa-ethereum"></i></p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">Owner</p>
                        <p class="text-green-500">46Se1D</p>
                    </div>
                    <div class="bg-gray-800 p-2 rounded">
                        <p class="text-gray-400">ID</p>
                        <p class="text-green-500">001</p>
                    </div>
                </div>
                <h2 class="text-xl font-bold mb-2">Activity</h2>
                <div class="bg-gray-800 p-2 rounded overflow-auto">
                    <table class="w-full custom-table">
                        <thead>
                            <tr class="text-left text-gray-400">
                                <th class="p-2">Action</th>
                                <th class="p-2">Price</th>
                                <th class="p-2">From</th>
                                <th class="p-2">To</th>
                                <th class="p-2">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="p-2">Listing</td>
                                <td class="p-2">0.75 <i class="fab fa-ethereum"></i></td>
                                <td class="p-2">Ulysses</td>
                                <td class="p-2">-</td>
                                <td class="p-2">3mo ago</td>
                            </tr>
                            <tr>
                                <td class="p-2">Sale</td>
                                <td class="p-2">0.75 <i class="fab fa-ethereum"></i></td>
                                <td class="p-2">Ulysses</td>
                                <td class="p-2">Alice</td>
                                <td class="p-2">2mo ago</td>
                            </tr>
                            <tr>
                                <td class="p-2">Listing</td>
                                <td class="p-2">3.00 <i class="fab fa-ethereum"></i></td>
                                <td class="p-2">Ulysses</td>
                                <td class="p-2">-</td>
                                <td class="p-2">1y ago</td>
                            </tr>
                            <tr>
                                <td class="p-2">Sale</td>
                                <td class="p-2">2.50 <i class="fab fa-ethereum"></i></td>
                                <td class="p-2">Ulysses</td>
                                <td class="p-2">Alice</td>
                                <td class="p-2">1y ago</td>
                            </tr>
                            <!-- Add more rows as needed -->
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <!-- Banner -->
    <div class="banner">
        <div class="banner-text">Welcome to Me's Keys Auction - The Ultimate NFT Experience!</div>
    </div>

    <!-- Modal for NFT Details -->
    <div id="nftModal" class="modal">
        <div class="modal-content">
            <span class="modal-close" id="closeModal">&times;</span>
            <h2 class="text-2xl font-bold mb-2">Me's Key #001</h2>
            <p class="text-gray-400 mb-4">Detailed view of the NFT key.</p>
            <img src="https://via.placeholder.com/400" alt="Me's Key NFT" class="rounded mb-4 w-full">
            <div class="bg-gray-800 p-2 rounded mb-4">
                <p class="text-gray-400">Current Bid</p>
                <p class="text-green-500">0.75 <i class="fab fa-ethereum"></i></p>
            </div>
            <input type="number" placeholder="Enter your bid" id="bidAmount" class="p-2 rounded bg-gray-800 text-green-500 border border-gray-600 mb-4">
            <button class="custom-button w-full py-2 rounded" id="placeBidButton">Place Bid</button>
        </div>
    </div>

    <!-- Modal for Wallet Connection -->
    <div id="walletModal" class="modal">
        <div class="modal-content">
            <span class="modal-close" id="closeWalletModal">&times;</span>
            <h2 class="text-2xl font-bold mb-2">Connect Your Wallet</h2>
            <p class="text-gray-400 mb-4">Please connect your wallet to participate in the auction.</p>
            <!-- Wallet connection form or buttons can be added here -->
            <button class="custom-button w-full py-2 rounded" id="connectWallet">Connect</button>
        </div>
    </div>

    <!-- JavaScript -->
    <script>
        // JavaScript for handling modals and wallet connection
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
            alert('Bid placed!'); // Replace with actual bidding logic
            document.getElementById('nftModal').style.display = 'none';
        }

        document.getElementById('connectWalletButton').onclick = function() {
            document.getElementById('walletModal').style.display = 'block';
        }

        document.getElementById('closeWalletModal').onclick = function() {
            document.getElementById('walletModal').style.display = 'none';
        }

        document.getElementById('connectWallet').onclick = function() {
            alert('Wallet connected!'); // Replace with actual wallet connection logic
            document.getElementById('walletModal').style.display = 'none';
        }

        // Close modals if user clicks outside of modal
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.style.display = 'none';
            }
        }
    </script>
</body>

</html>
