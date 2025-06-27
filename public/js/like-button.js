function getDeviceId() {
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('deviceId', deviceId);
    }
    return deviceId;
}

function handleLike(sectionId) {
    const deviceId = getDeviceId();
    const hasLiked = localStorage.getItem(`liked_${sectionId}_${deviceId}`);
    const btn = document.getElementById(`likeBtn_${sectionId}`);
    if (hasLiked) {
        // UNLIKE
        fetch(`/unlike/${sectionId}`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                const countElement = document.getElementById(`likeCount_${sectionId}`);
                if (countElement) {
                    countElement.textContent = data.likes;
                }
                localStorage.removeItem(`liked_${sectionId}_${deviceId}`);
                if (btn) {
                    btn.classList.remove('liked');
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa fa-heart"></i> Like <span id="likeCount_' + sectionId + '">' + data.likes + '</span>';
                }
            })
            .catch(error => {
                alert('Gagal unlike. Silakan coba lagi.');
            });
    } else {
        // LIKE
        fetch(`/like/${sectionId}`, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                const countElement = document.getElementById(`likeCount_${sectionId}`);
                if (countElement) {
                    countElement.textContent = data.likes;
                }
                localStorage.setItem(`liked_${sectionId}_${deviceId}`, 'true');
                if (btn) {
                    btn.classList.add('liked');
                    btn.disabled = false;
                    btn.innerHTML = '<i class="fa fa-heart"></i> Unlike <span id="likeCount_' + sectionId + '">' + data.likes + '</span>';
                }
            })
            .catch(error => {
                alert('Gagal memberikan like. Silakan coba lagi.');
            });
    }
}

// Load initial likes
window.addEventListener('load', function() {
    const deviceId = getDeviceId();
    fetch('/likes')
        .then(response => response.json())
        .then(likes => {
            document.querySelectorAll('[id^="likeCount_buku_"]').forEach(el => {
                const sectionId = el.id.replace('likeCount_', '');
                el.textContent = likes[sectionId] || 0;

                const hasLiked = localStorage.getItem(`liked_${sectionId}_${deviceId}`);
                const btn = document.getElementById(`likeBtn_${sectionId}`);
                if (btn) {
                    if (hasLiked) {
                        btn.classList.add('liked');
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fa fa-heart"></i> Unlike <span id="likeCount_' + sectionId + '">' + (likes[sectionId] || 0) + '</span>';
                    } else {
                        btn.classList.remove('liked');
                        btn.disabled = false;
                        btn.innerHTML = '<i class="fa fa-heart"></i> Like <span id="likeCount_' + sectionId + '">' + (likes[sectionId] || 0) + '</span>';
                    }
                }
            });
        })
        .catch(error => {
            // Error loading likes, silently ignore
        });
});