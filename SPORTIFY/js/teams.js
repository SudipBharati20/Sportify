// Mock Data
const leagues = [
    { id: 'premier-league', name: 'Premier League', country: 'England', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
    { id: 'la-liga', name: 'La Liga', country: 'Spain', icon: '🇪🇸' },
    { id: 'serie-a', name: 'Serie A', country: 'Italy', icon: '🇮🇹' },
    { id: 'bundesliga', name: 'Bundesliga', country: 'Germany', icon: '🇩🇪' },
    { id: 'ligue-1', name: 'Ligue 1', country: 'France', icon: '🇫🇷' },
    { id: 'eredivisie', name: 'Eredivisie', country: 'Netherlands', icon: '🇳🇱' }
];

const teams = {
    'premier-league': [
        { id: 'chelsea', name: 'Chelsea FC', logo: '🔵' },
        { id: 'man-city', name: 'Manchester City', logo: '🔵' },
        { id: 'liverpool', name: 'Liverpool FC', logo: '🔴' },
        { id: 'arsenal', name: 'Arsenal FC', logo: '🔴' },
        { id: 'man-utd', name: 'Manchester United', logo: '🔴' },
        { id: 'tottenham', name: 'Tottenham', logo: '⚪' }
    ],
    'la-liga': [
        { id: 'barcelona', name: 'FC Barcelona', logo: '🔵' },
        { id: 'real-madrid', name: 'Real Madrid', logo: '⚪' },
        { id: 'atletico', name: 'Atlético Madrid', logo: '🔴' },
        { id: 'sevilla', name: 'Sevilla FC', logo: '🔴' }
    ],
    'serie-a': [
        { id: 'juventus', name: 'Juventus', logo: '⚫' },
        { id: 'milan', name: 'AC Milan', logo: '🔴' },
        { id: 'inter', name: 'Inter Milan', logo: '🔵' },
        { id: 'napoli', name: 'Napoli', logo: '🔵' }
    ],
    'bundesliga': [
        { id: 'bayern', name: 'Bayern Munich', logo: '🔴' },
        { id: 'dortmund', name: 'Borussia Dortmund', logo: '🟡' },
        { id: 'leipzig', name: 'RB Leipzig', logo: '🔴' }
    ],
    'ligue-1': [
        { id: 'psg', name: 'Paris Saint-Germain', logo: '🔵' },
        { id: 'marseille', name: 'Marseille', logo: '⚪' },
        { id: 'lyon', name: 'Lyon', logo: '🔵' }
    ],
    'eredivisie': [
        { id: 'ajax', name: 'Ajax Amsterdam', logo: '🔴' },
        { id: 'psv', name: 'PSV Eindhoven', logo: '🔴' },
        { id: 'feyenoord', name: 'Feyenoord', logo: '🔴' }
    ]
};

const teamDetails = {
    'chelsea': {
        name: 'Chelsea FC',
        logo: '🔵',
        stadium: 'Stamford Bridge',
        founded: 1905,
        news: [
            { date: 'Feb 10, 2026', title: 'Chelsea Secure Dramatic Victory', content: 'Blues come from behind to win 3-2 in thrilling encounter at Stamford Bridge.' },
            { date: 'Feb 8, 2026', title: 'New Signing Makes Debut', content: 'Latest addition to the squad impresses in first appearance for the club.' },
            { date: 'Feb 5, 2026', title: 'Manager Discusses Champions League Ambitions', content: 'Head coach outlines strategy for European campaign push.' }
        ],
        squad: [
            { number: 1, name: 'Robert Sánchez', position: 'GK', appearances: 25, goals: 0 },
            { number: 4, name: 'Benoît Badiashile', position: 'DEF', appearances: 20, goals: 1 },
            { number: 6, name: 'Thiago Silva', position: 'DEF', appearances: 22, goals: 2 },
            { number: 21, name: 'Ben Chilwell', position: 'DEF', appearances: 18, goals: 1 },
            { number: 24, name: 'Reece James', position: 'DEF', appearances: 15, goals: 2 },
            { number: 5, name: 'Enzo Fernández', position: 'MID', appearances: 26, goals: 4 },
            { number: 8, name: 'Moisés Caicedo', position: 'MID', appearances: 24, goals: 2 },
            { number: 20, name: 'Cole Palmer', position: 'MID', appearances: 27, goals: 18 },
            { number: 10, name: 'Raheem Sterling', position: 'FWD', appearances: 23, goals: 7 },
            { number: 15, name: 'Nicolas Jackson', position: 'FWD', appearances: 26, goals: 12 },
            { number: 7, name: 'Noni Madueke', position: 'FWD', appearances: 19, goals: 5 }
        ],
        matches: [
            { date: 'Feb 15, 2026', home: 'Chelsea FC', homeLogo: '🔵', away: 'Arsenal FC', awayLogo: '🔴', score: 'vs', status: 'Upcoming', time: '17:30' },
            { date: 'Feb 11, 2026', home: 'Chelsea FC', homeLogo: '🔵', away: 'Aston Villa', awayLogo: '🟣', score: '3 - 2', status: 'FT' },
            { date: 'Feb 8, 2026', home: 'Manchester City', homeLogo: '🔵', away: 'Chelsea FC', awayLogo: '🔵', score: '1 - 1', status: 'FT' },
            { date: 'Feb 4, 2026', home: 'Chelsea FC', homeLogo: '🔵', away: 'Liverpool FC', awayLogo: '🔴', score: '2 - 0', status: 'FT' }
        ],
        tactics: {
            formation: '4-3-3',
            style: [
                'Possession-based football with quick transitions',
                'High pressing in opponent\'s half',
                'Wide attacking play through wingers',
                'Fluid midfield rotations',
                'Strong defensive organization'
            ],
            positions: [
                ['GK'],
                ['LB', 'CB', 'CB', 'RB'],
                ['CM', 'CM', 'CM'],
                ['LW', 'ST', 'RW']
            ]
        }
    },
    'barcelona': {
        name: 'FC Barcelona',
        logo: '🔵',
        stadium: 'Camp Nou',
        founded: 1899,
        news: [
            { date: 'Feb 10, 2026', title: 'Barcelona Dominate El Clásico', content: 'Blaugrana put on masterclass performance in 4-1 victory over Real Madrid.' },
            { date: 'Feb 7, 2026', title: 'Youth Academy Star Promoted', content: 'La Masia graduate called up to first team squad.' },
            { date: 'Feb 4, 2026', title: 'Record Attendance at Camp Nou', content: 'Over 99,000 fans witness historic Champions League night.' }
        ],
        squad: [
            { number: 1, name: 'Marc-André ter Stegen', position: 'GK', appearances: 24, goals: 0 },
            { number: 4, name: 'Ronald Araújo', position: 'DEF', appearances: 22, goals: 3 },
            { number: 5, name: 'Jules Koundé', position: 'DEF', appearances: 25, goals: 1 },
            { number: 3, name: 'Alejandro Balde', position: 'DEF', appearances: 23, goals: 2 },
            { number: 21, name: 'Frenkie de Jong', position: 'MID', appearances: 26, goals: 5 },
            { number: 8, name: 'Pedri', position: 'MID', appearances: 24, goals: 4 },
            { number: 6, name: 'Gavi', position: 'MID', appearances: 20, goals: 3 },
            { number: 19, name: 'Lamine Yamal', position: 'FWD', appearances: 27, goals: 11 },
            { number: 9, name: 'Robert Lewandowski', position: 'FWD', appearances: 25, goals: 21 },
            { number: 7, name: 'Ferran Torres', position: 'FWD', appearances: 22, goals: 8 }
        ],
        matches: [
            { date: 'Feb 16, 2026', home: 'FC Barcelona', homeLogo: '🔵', away: 'Atletico Madrid', awayLogo: '🔴', score: 'vs', status: 'Upcoming', time: '21:00' },
            { date: 'Feb 10, 2026', home: 'Real Madrid', homeLogo: '⚪', away: 'FC Barcelona', awayLogo: '🔵', score: '1 - 4', status: 'FT' },
            { date: 'Feb 6, 2026', home: 'FC Barcelona', homeLogo: '🔵', away: 'Valencia', awayLogo: '🟠', score: '3 - 0', status: 'FT' }
        ],
        tactics: {
            formation: '4-3-3',
            style: [
                'Tiki-taka possession football',
                'Building from the back',
                'High defensive line with offside trap',
                'Quick combination play in final third',
                'Positional rotation and fluidity'
            ],
            positions: [
                ['GK'],
                ['LB', 'CB', 'CB', 'RB'],
                ['CM', 'CM', 'CM'],
                ['LW', 'ST', 'RW']
            ]
        }
    }
};

// State Management
let currentView = 'leagues';
let selectedLeague = null;
let selectedTeam = null;
let activeTab = 'news';

// Initialize App
function init() {
    showLeagues();
}

// Navigation
function goHome() {
    currentView = 'leagues';
    selectedLeague = null;
    selectedTeam = null;
    showLeagues();
}

function showBreadcrumb() {
    let html = '<div class="breadcrumb">';
    html += '<span onclick="goHome()" class="' + (currentView === 'leagues' ? 'active' : '') + '">Leagues</span>';
    
    if (selectedLeague) {
        html += ' <span>›</span> ';
        html += '<span onclick="showTeams(\'' + selectedLeague.id + '\')" class="' + (currentView === 'teams' ? 'active' : '') + '">' + selectedLeague.name + '</span>';
    }
    
    if (selectedTeam) {
        html += ' <span>›</span> ';
        html += '<span class="active">' + selectedTeam.name + '</span>';
    }
    
    html += '</div>';
    return html;
}

// Show Leagues
function showLeagues() {
    currentView = 'leagues';
    const app = document.getElementById('app');
    
    let html = showBreadcrumb();
    html += '<h1 class="section-title">Explore Football Leagues</h1>';
    html += '<div class="league-grid">';
    
    leagues.forEach(league => {
        html += `
            <div class="league-card" onclick="showTeams('${league.id}')">
                <div class="league-icon">${league.icon}</div>
                <div class="league-name">${league.name}</div>
                <div class="league-country">${league.country}</div>
            </div>
        `;
    });
    
    html += '</div>';
    app.innerHTML = html;
}

// Show Teams
function showTeams(leagueId) {
    currentView = 'teams';
    selectedLeague = leagues.find(l => l.id === leagueId);
    const app = document.getElementById('app');
    
    let html = showBreadcrumb();
    html += '<h1 class="section-title">' + selectedLeague.name + ' Teams</h1>';
    html += '<div class="teams-grid">';
    
    teams[leagueId].forEach(team => {
        html += `
            <div class="team-card" onclick="showTeamDetails('${team.id}')">
                <div class="team-logo">${team.logo}</div>
                <div class="team-name">${team.name}</div>
            </div>
        `;
    });
    
    html += '</div>';
    app.innerHTML = html;
}

// Show Team Details
function showTeamDetails(teamId) {
    currentView = 'team';
    const team = teamDetails[teamId];
    if (!team) {
        alert('Team details not available yet. This is demo data for Chelsea and Barcelona.');
        return;
    }
    
    selectedTeam = team;
    const app = document.getElementById('app');
    
    let html = showBreadcrumb();
    
    // Team Header
    html += `
        <div class="team-header">
            <div class="team-header-logo">${team.logo}</div>
            <div class="team-header-info">
                <h1>${team.name}</h1>
                <p>Stadium: ${team.stadium} • Founded: ${team.founded}</p>
            </div>
        </div>
    `;
    
    // Tabs
    html += `
        <div class="tabs">
            <button class="tab active" onclick="switchTab('news')">Latest News</button>
            <button class="tab" onclick="switchTab('squad')">Squad</button>
            <button class="tab" onclick="switchTab('matches')">Matches</button>
            <button class="tab" onclick="switchTab('tactics')">Tactics</button>
        </div>
    `;
    
    // Tab Contents
    html += '<div class="team-details">';
    
    // News Tab
    html += '<div id="tab-news" class="tab-content active">';
    html += '<div class="news-list">';
    team.news.forEach(news => {
        html += `
            <div class="news-item">
                <div class="news-date">${news.date}</div>
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.content}</p>
                </div>
            </div>
        `;
    });
    html += '</div></div>';
    
    // Squad Tab
    html += '<div id="tab-squad" class="tab-content">';
    html += '<div class="squad-grid">';
    team.squad.forEach(player => {
        html += `
            <div class="player-card-small">
                <div class="player-header-small">
                    <div class="player-number">${player.number}</div>
                    <div class="player-position-badge">${player.position}</div>
                </div>
                <div class="player-name-small">${player.name}</div>
                <div class="player-stats-small">
                    <span>Apps: ${player.appearances}</span>
                    <span>Goals: ${player.goals}</span>
                </div>
            </div>
        `;
    });
    html += '</div></div>';
    
    // Matches Tab
    html += '<div id="tab-matches" class="tab-content">';
    html += '<div class="matches-container">';
    team.matches.forEach(match => {
        html += `
            <div class="match-card">
                <div class="match-date">${match.date}</div>
                <div class="match-teams">
                    <div class="match-team">
                        <div class="match-team-logo">${match.homeLogo}</div>
                        <div class="match-team-name">${match.home}</div>
                    </div>
                    <div class="match-score">${match.score}</div>
                    <div class="match-team">
                        <div class="match-team-logo">${match.awayLogo}</div>
                        <div class="match-team-name">${match.away}</div>
                    </div>
                </div>
                <div class="match-status">${match.status}${match.time ? ' • ' + match.time : ''}</div>
            </div>
        `;
    });
    html += '</div></div>';
    
    // Tactics Tab
    html += '<div id="tab-tactics" class="tab-content">';
    html += '<div class="tactics-container">';
    html += `
        <div class="formation-display">
            <div class="formation-title">Formation: ${team.tactics.formation}</div>
            <div class="pitch">
    `;
    
    team.tactics.positions.forEach(line => {
        html += '<div class="formation-line">';
        line.forEach(pos => {
            html += `<div class="player-position">${pos}</div>`;
        });
        html += '</div>';
    });
    
    html += `
            </div>
        </div>
        <div class="tactics-info">
            <h3>Playing Style</h3>
            <ul class="tactics-list">
    `;
    
    team.tactics.style.forEach(point => {
        html += `<li>${point}</li>`;
    });
    
    html += `
            </ul>
        </div>
    `;
    html += '</div></div>';
    
    html += '</div>';
    
    app.innerHTML = html;
}

// Switch Tab
function switchTab(tabName) {
    activeTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById('tab-' + tabName).classList.add('active');
}

// Initialize on load
init();