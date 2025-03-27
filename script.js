document.addEventListener('DOMContentLoaded', function() {
    // 탭 전환 기능
    const tabButtons = document.querySelectorAll('.tab-btn');
    const viewContents = document.querySelectorAll('.view-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 모든 탭 버튼에서 active 클래스 제거
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // 현재 클릭된 버튼에 active 클래스 추가
            button.classList.add('active');
            
            // 모든 콘텐츠 영역에서 active 클래스 제거
            viewContents.forEach(content => content.classList.remove('active'));
            
            // 클릭된 버튼에 해당하는 콘텐츠 영역에 active 클래스 추가
            const viewToShow = button.getAttribute('data-view');
            document.getElementById(`${viewToShow}-view`).classList.add('active');
        });
    });
    
    // 과목 카드 클릭 시 상세 정보 표시 기능
    const subjectCards = document.querySelectorAll('.subject-card');
    const subjectDetails = document.querySelectorAll('.subject-detail');
    
    // 첫 번째 과목 카드와 상세 정보를 기본으로 활성화
    if(subjectCards.length > 0 && subjectDetails.length > 0) {
        subjectCards[0].classList.add('active');
        subjectDetails[0].classList.add('active');
    }
    
    subjectCards.forEach(card => {
        card.addEventListener('click', () => {
            // 모든 카드에서 active 클래스 제거
            subjectCards.forEach(c => c.classList.remove('active'));
            // 현재 클릭된 카드에 active 클래스 추가
            card.classList.add('active');
            
            // 모든 상세 정보 영역에서 active 클래스 제거
            subjectDetails.forEach(detail => detail.classList.remove('active'));
            
            // 클릭된 카드에 해당하는 상세 정보 영역에 active 클래스 추가
            const subjectName = card.getAttribute('data-subject');
            document.getElementById(`${subjectName}-detail`).classList.add('active');
        });
    });
    
    // 애니메이션 효과 추가
    function addFadeInEffect() {
        const elements = document.querySelectorAll('.subject-card, .timeline-item');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, 100 * index);
        });
    }
    
    // 페이지 로드 시 애니메이션 실행
    addFadeInEffect();
    
    // 탭 전환 시 애니메이션 다시 실행
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            setTimeout(addFadeInEffect, 50);
        });
    });
    
    // 모바일 메뉴 토글 기능 (화면이 작아질 경우 사용)
    function setupResponsiveFeatures() {
        if (window.innerWidth <= 768) {
            // 모바일 화면에서는 과목 카드 클릭 시 스크롤을 상세 정보로 이동
            subjectCards.forEach(card => {
                card.addEventListener('click', () => {
                    const subjectDetails = document.querySelector('.subject-details');
                    subjectDetails.scrollIntoView({ behavior: 'smooth' });
                });
            });
        }
    }
    
    // 초기 설정 및 화면 크기 변경 시 반응형 기능 설정
    setupResponsiveFeatures();
    window.addEventListener('resize', setupResponsiveFeatures);
}); 