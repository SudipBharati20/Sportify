// Data Storage
let leagues = [];
let teams = {};
let teamDetails = {};

// State Management
let currentView = 'leagues';
let selectedLeague = null;
let selectedTeam = null;
let activeTab = 'news';

// Initialize with default data
function initializeDefaultData() {
    // Load from localStorage if available
    const savedLeagues = localStorage.getItem('leagues');
    const savedTeams = localStorage.getItem('teams');
    const savedTeamDetails = localStorage.getItem('teamDetails');

    if (savedLeagues) {
        console.log('📂 Loading data from localStorage...');
        leagues = JSON.parse(savedLeagues);
        teams = JSON.parse(savedTeams);
        teamDetails = JSON.parse(savedTeamDetails);
        console.log('✅ Loaded from storage:', leagues.length, 'leagues');
    } else {
        console.log('🆕 No saved data found. Loading default data...');
        // Default leagues with actual logo paths
        leagues = [
            { id: 'premier-league', name: 'Premier League', country: 'England', logo: '../assets/pl.png' },
            { id: 'la-liga', name: 'La Liga', country: 'Spain', logo: '../assets/lal.png' },
            { id: 'serie-a', name: 'Serie A', country: 'Italy', logo: '../assets/ser.png' },
            { id: 'bundesliga', name: 'Bundesliga', country: 'Germany', logo: '../assets/bun.png' },
            { id: 'ligue-1', name: 'Ligue 1', country: 'France', logo: '../assets/lig.png' }
        ];

        // COMPREHENSIVE TEAMS DATA FOR ALL LEAGUES
        teams = {
            'premier-league': [
                { id: 'arsenal', name: 'Arsenal', logo: '🔴', stadium: 'Emirates Stadium', founded: 1886 },
                { id: 'aston-villa', name: 'Aston Villa', logo: '🟣', stadium: 'Villa Park', founded: 1874 },
                { id: 'bournemouth', name: 'AFC Bournemouth', logo: '🔴', stadium: 'Vitality Stadium', founded: 1899 },
                { id: 'brentford', name: 'Brentford', logo: '🔴', stadium: 'Gtech Community Stadium', founded: 1889 },
                { id: 'brighton', name: 'Brighton & Hove Albion', logo: '🔵', stadium: 'American Express Stadium', founded: 1901 },
                { id: 'burnley', name: 'Burnley', logo: '🟣', stadium: 'Turf Moor', founded: 1882 },
                { id: 'chelsea', name: 'Chelsea', logo: '🔵', stadium: 'Stamford Bridge', founded: 1905 },
                { id: 'crystal-palace', name: 'Crystal Palace', logo: '🔴', stadium: 'Selhurst Park', founded: 1905 },
                { id: 'everton', name: 'Everton', logo: '🔵', stadium: 'Hill Dickinson Stadium', founded: 1878 },
                { id: 'fulham', name: 'Fulham', logo: '⚪', stadium: 'Craven Cottage', founded: 1879 },
                { id: 'leeds-united', name: 'Leeds United', logo: '⚪', stadium: 'Elland Road', founded: 1919 },
                { id: 'liverpool', name: 'Liverpool', logo: '🔴', stadium: 'Anfield', founded: 1892 },
                { id: 'man-city', name: 'Manchester City', logo: '🔵', stadium: 'Etihad Stadium', founded: 1880 },
                { id: 'man-utd', name: 'Manchester United', logo: '🔴', stadium: 'Old Trafford', founded: 1878 },
                { id: 'newcastle', name: 'Newcastle United', logo: '⚫', stadium: 'St James\' Park', founded: 1892 },
                { id: 'nottingham', name: 'Nottingham Forest', logo: '🔴', stadium: 'City Ground', founded: 1865 },
                { id: 'sunderland', name: 'Sunderland', logo: '🔴', stadium: 'Stadium of Light', founded: 1879 },
                { id: 'tottenham', name: 'Tottenham Hotspur', logo: '⚪', stadium: 'Tottenham Hotspur Stadium', founded: 1882 },
                { id: 'west-ham', name: 'West Ham United', logo: '🟣', stadium: 'London Stadium', founded: 1895 },
                { id: 'wolves', name: 'Wolverhampton Wanderers', logo: '🟡', stadium: 'Molineux Stadium', founded: 1877 }
            ],
            
            'la-liga': [
                { id: 'athletic-bilbao', name: 'Athletic Bilbao', logo: '🔴', stadium: 'San Mamés', founded: 1898 },
                { id: 'atletico-madrid', name: 'Atlético Madrid', logo: '🔴', stadium: 'Cívitas Metropolitano', founded: 1903 },
                { id: 'barcelona', name: 'FC Barcelona', logo: '🔵', stadium: 'Camp Nou', founded: 1899 },
                { id: 'celta-vigo', name: 'Celta Vigo', logo: '🔵', stadium: 'Balaídos', founded: 1923 },
                { id: 'elche', name: 'Elche CF', logo: '🟢', stadium: 'Martínez Valero', founded: 1923 },
                { id: 'espanyol', name: 'RCD Espanyol', logo: '🔵', stadium: 'RCDE Stadium', founded: 1900 },
                { id: 'getafe', name: 'Getafe CF', logo: '🔵', stadium: 'Coliseum Alfonso Pérez', founded: 1983 },
                { id: 'girona', name: 'Girona FC', logo: '🔴', stadium: 'Estadi Montilivi', founded: 1930 },
                { id: 'levante', name: 'Levante UD', logo: '🔴', stadium: 'Ciutat de València', founded: 1909 },
                { id: 'mallorca', name: 'RCD Mallorca', logo: '🔴', stadium: 'Visit Mallorca Stadium', founded: 1916 },
                { id: 'osasuna', name: 'CA Osasuna', logo: '🔴', stadium: 'El Sadar', founded: 1920 },
                { id: 'oviedo', name: 'Real Oviedo', logo: '🔵', stadium: 'Carlos Tartiere', founded: 1926 },
                { id: 'rayo-vallecano', name: 'Rayo Vallecano', logo: '⚪', stadium: 'Campo de Fútbol de Vallecas', founded: 1924 },
                { id: 'real-betis', name: 'Real Betis', logo: '🟢', stadium: 'Benito Villamarín', founded: 1907 },
                { id: 'real-madrid', name: 'Real Madrid', logo: '⚪', stadium: 'Santiago Bernabéu', founded: 1902 },
                { id: 'real-sociedad', name: 'Real Sociedad', logo: '🔵', stadium: 'Anoeta', founded: 1909 },
                { id: 'sevilla', name: 'Sevilla FC', logo: '🔴', stadium: 'Ramón Sánchez Pizjuán', founded: 1890 },
                { id: 'valencia', name: 'Valencia CF', logo: '⚪', stadium: 'Mestalla', founded: 1919 },
                { id: 'villarreal', name: 'Villarreal CF', logo: '🟡', stadium: 'Estadio de la Cerámica', founded: 1923 },
                { id: 'alaves', name: 'Deportivo Alavés', logo: '🔵', stadium: 'Mendizorroza', founded: 1921 }
            ],
            
            'serie-a': [
                { id: 'atalanta', name: 'Atalanta', logo: '🔵', stadium: 'Gewiss Stadium', founded: 1907 },
                { id: 'bologna', name: 'Bologna', logo: '🔴', stadium: 'Stadio Renato Dall\'Ara', founded: 1909 },
                { id: 'cagliari', name: 'Cagliari', logo: '🔴', stadium: 'Unipol Domus', founded: 1920 },
                { id: 'como', name: 'Como 1907', logo: '🔵', stadium: 'Stadio Giuseppe Sinigaglia', founded: 1907 },
                { id: 'cremonese', name: 'Cremonese', logo: '🔴', stadium: 'Stadio Giovanni Zini', founded: 1903 },
                { id: 'fiorentina', name: 'Fiorentina', logo: '🟣', stadium: 'Stadio Artemio Franchi', founded: 1926 },
                { id: 'genoa', name: 'Genoa', logo: '🔴', stadium: 'Stadio Luigi Ferraris', founded: 1893 },
                { id: 'inter', name: 'Inter Milan', logo: '🔵', stadium: 'San Siro', founded: 1908 },
                { id: 'juventus', name: 'Juventus', logo: '⚫', stadium: 'Allianz Stadium', founded: 1897 },
                { id: 'lazio', name: 'Lazio', logo: '🔵', stadium: 'Stadio Olimpico', founded: 1900 },
                { id: 'lecce', name: 'Lecce', logo: '🟡', stadium: 'Stadio Via del Mare', founded: 1908 },
                { id: 'milan', name: 'AC Milan', logo: '🔴', stadium: 'San Siro', founded: 1899 },
                { id: 'napoli', name: 'Napoli', logo: '🔵', stadium: 'Stadio Diego Armando Maradona', founded: 1926 },
                { id: 'parma', name: 'Parma', logo: '🟡', stadium: 'Stadio Ennio Tardini', founded: 1913 },
                { id: 'pisa', name: 'Pisa', logo: '🔵', stadium: 'Arena Garibaldi', founded: 1909 },
                { id: 'roma', name: 'AS Roma', logo: '🔴', stadium: 'Stadio Olimpico', founded: 1927 },
                { id: 'sassuolo', name: 'Sassuolo', logo: '🟢', stadium: 'Mapei Stadium', founded: 1920 },
                { id: 'torino', name: 'Torino', logo: '🔴', stadium: 'Stadio Olimpico Grande Torino', founded: 1906 },
                { id: 'udinese', name: 'Udinese', logo: '⚫', stadium: 'Stadio Friuli', founded: 1896 },
                { id: 'verona', name: 'Hellas Verona', logo: '🔵', stadium: 'Stadio Marcantonio Bentegodi', founded: 1903 }
            ],
            
            'ligue-1': [
                { id: 'angers', name: 'Angers SCO', logo: '⚫', stadium: 'Stade Raymond Kopa', founded: 1919 },
                { id: 'auxerre', name: 'AJ Auxerre', logo: '⚪', stadium: 'Stade de l\'Abbé-Deschamps', founded: 1905 },
                { id: 'brest', name: 'Stade Brestois', logo: '🔴', stadium: 'Stade Francis-Le Blé', founded: 1950 },
                { id: 'le-havre', name: 'Le Havre AC', logo: '🔵', stadium: 'Stade Océane', founded: 1894 },
                { id: 'lens', name: 'RC Lens', logo: '🟡', stadium: 'Stade Bollaert-Delelis', founded: 1906 },
                { id: 'lille', name: 'Lille OSC', logo: '🔴', stadium: 'Stade Pierre-Mauroy', founded: 1944 },
                { id: 'lorient', name: 'FC Lorient', logo: '🟠', stadium: 'Stade du Moustoir', founded: 1926 },
                { id: 'lyon', name: 'Olympique Lyonnais', logo: '🔵', stadium: 'Groupama Stadium', founded: 1950 },
                { id: 'marseille', name: 'Olympique de Marseille', logo: '🔵', stadium: 'Stade Vélodrome', founded: 1899 },
                { id: 'metz', name: 'FC Metz', logo: '🔴', stadium: 'Stade Saint-Symphorien', founded: 1932 },
                { id: 'monaco', name: 'AS Monaco', logo: '🔴', stadium: 'Stade Louis II', founded: 1924 },
                { id: 'nantes', name: 'FC Nantes', logo: '🟡', stadium: 'Stade de la Beaujoire', founded: 1943 },
                { id: 'nice', name: 'OGC Nice', logo: '🔴', stadium: 'Allianz Riviera', founded: 1904 },
                { id: 'paris-fc', name: 'Paris FC', logo: '🔵', stadium: 'Stade Charléty', founded: 1969 },
                { id: 'psg', name: 'Paris Saint-Germain', logo: '🔵', stadium: 'Parc des Princes', founded: 1970 },
                { id: 'rennes', name: 'Stade Rennais', logo: '🔴', stadium: 'Roazhon Park', founded: 1901 },
                { id: 'strasbourg', name: 'RC Strasbourg Alsace', logo: '🔵', stadium: 'Stade de la Meinau', founded: 1906 },
                { id: 'toulouse', name: 'Toulouse FC', logo: '🟣', stadium: 'Stadium de Toulouse', founded: 1970 }
            ]
        };

        // Team details with real players (expand as needed)
        teamDetails = {
            // PREMIER LEAGUE TEAMS
            'arsenal': {
                name: 'Arsenal',
                logo: '🔴',
                stadium: 'Emirates Stadium',
                founded: 1886,
                squad: [
                    { number: 1, name: 'David Raya', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'Ben White', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 6, name: 'Gabriel Magalhães', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Martin Ødegaard', position: 'MID', appearances: 0, goals: 0 },
                    { number: 9, name: 'Gabriel Jesus', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 7, name: 'Bukayo Saka', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 11, name: 'Leandro Trossard', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 29, name: 'Kai Havertz', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Possession-based football', 'High pressing', 'Quick transitions'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'liverpool': {
                name: 'Liverpool',
                logo: '🔴',
                stadium: 'Anfield',
                founded: 1892,
                squad: [
                    { number: 1, name: 'Alisson Becker', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'Virgil van Dijk', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 66, name: 'Trent Alexander-Arnold', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Dominik Szoboszlai', position: 'MID', appearances: 0, goals: 0 },
                    { number: 11, name: 'Mohamed Salah', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 9, name: 'Darwin Núñez', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 7, name: 'Luis Díaz', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['High-intensity pressing', 'Counter-attacking', 'Wing play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'chelsea': {
                name: 'Chelsea',
                logo: '🔵',
                stadium: 'Stamford Bridge',
                founded: 1905,
                squad: [
                    { number: 1, name: 'Robert Sánchez', position: 'GK', appearances: 0, goals: 0 },
                    { number: 6, name: 'Thiago Silva', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 24, name: 'Reece James', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Enzo Fernández', position: 'MID', appearances: 0, goals: 0 },
                    { number: 20, name: 'Cole Palmer', position: 'MID', appearances: 0, goals: 0 },
                    { number: 15, name: 'Nicolas Jackson', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-2-3-1',
                    style: ['Possession football', 'High defensive line', 'Quick transitions'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CDM', 'CDM'], ['LW', 'CAM', 'RW'], ['ST']]
                }
            },

            'man-city': {
                name: 'Manchester City',
                logo: '🔵',
                stadium: 'Etihad Stadium',
                founded: 1880,
                squad: [
                    { number: 31, name: 'Ederson', position: 'GK', appearances: 0, goals: 0 },
                    { number: 3, name: 'Rúben Dias', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 2, name: 'Kyle Walker', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 16, name: 'Rodri', position: 'MID', appearances: 0, goals: 0 },
                    { number: 17, name: 'Kevin De Bruyne', position: 'MID', appearances: 0, goals: 0 },
                    { number: 9, name: 'Erling Haaland', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 10, name: 'Jack Grealish', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Tiki-taka possession', 'High pressing', 'Positional play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'man-utd': {
                name: 'Manchester United',
                logo: '🔴',
                stadium: 'Old Trafford',
                founded: 1878,
                squad: [
                    { number: 1, name: 'André Onana', position: 'GK', appearances: 0, goals: 0 },
                    { number: 6, name: 'Lisandro Martínez', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Bruno Fernandes', position: 'MID', appearances: 0, goals: 0 },
                    { number: 18, name: 'Casemiro', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Marcus Rashford', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 11, name: 'Rasmus Højlund', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-2-3-1',
                    style: ['Counter-attacking', 'Direct play', 'Wing play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CDM', 'CDM'], ['LW', 'CAM', 'RW'], ['ST']]
                }
            },

            // LA LIGA TEAMS
            'barcelona': {
                name: 'FC Barcelona',
                logo: '🔵',
                stadium: 'Camp Nou',
                founded: 1899,
                squad: [
                    { number: 1, name: 'Marc-André ter Stegen', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'Ronald Araújo', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Pedri', position: 'MID', appearances: 0, goals: 0 },
                    { number: 21, name: 'Frenkie de Jong', position: 'MID', appearances: 0, goals: 0 },
                    { number: 9, name: 'Robert Lewandowski', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 19, name: 'Lamine Yamal', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 11, name: 'Raphinha', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Tiki-taka', 'High possession', 'Positional play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'real-madrid': {
                name: 'Real Madrid',
                logo: '⚪',
                stadium: 'Santiago Bernabéu',
                founded: 1902,
                squad: [
                    { number: 1, name: 'Thibaut Courtois', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'David Alaba', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 10, name: 'Luka Modrić', position: 'MID', appearances: 0, goals: 0 },
                    { number: 8, name: 'Federico Valverde', position: 'MID', appearances: 0, goals: 0 },
                    { number: 9, name: 'Kylian Mbappé', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 7, name: 'Vinícius Júnior', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 11, name: 'Rodrygo', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Counter-attacking', 'Wing play', 'High tempo'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'atletico-madrid': {
                name: 'Atlético Madrid',
                logo: '🔴',
                stadium: 'Cívitas Metropolitano',
                founded: 1903,
                squad: [
                    { number: 13, name: 'Jan Oblak', position: 'GK', appearances: 0, goals: 0 },
                    { number: 2, name: 'José Giménez', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 5, name: 'Rodrigo De Paul', position: 'MID', appearances: 0, goals: 0 },
                    { number: 6, name: 'Koke', position: 'MID', appearances: 0, goals: 0 },
                    { number: 7, name: 'Antoine Griezmann', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 19, name: 'Julián Álvarez', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-4-2',
                    style: ['Defensive solidity', 'Counter-attacking', 'Set-piece strength'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['LM', 'CM', 'CM', 'RM'], ['ST', 'ST']]
                }
            },

            // SERIE A TEAMS
            'inter': {
                name: 'Inter Milan',
                logo: '🔵',
                stadium: 'San Siro',
                founded: 1908,
                squad: [
                    { number: 1, name: 'Yann Sommer', position: 'GK', appearances: 0, goals: 0 },
                    { number: 6, name: 'Stefan de Vrij', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 23, name: 'Nicolò Barella', position: 'MID', appearances: 0, goals: 0 },
                    { number: 20, name: 'Hakan Çalhanoğlu', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Lautaro Martínez', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 9, name: 'Marcus Thuram', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '3-5-2',
                    style: ['Wing-back system', 'Compact defending', 'Quick transitions'],
                    positions: [['GK'], ['CB', 'CB', 'CB'], ['RWB', 'CM', 'CM', 'LWB'], ['ST', 'ST']]
                }
            },

            'milan': {
                name: 'AC Milan',
                logo: '🔴',
                stadium: 'San Siro',
                founded: 1899,
                squad: [
                    { number: 16, name: 'Mike Maignan', position: 'GK', appearances: 0, goals: 0 },
                    { number: 23, name: 'Fikayo Tomori', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Ruben Loftus-Cheek', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Rafael Leão', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 11, name: 'Christian Pulisic', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-2-3-1',
                    style: ['High pressing', 'Quick transitions', 'Wing play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CDM', 'CDM'], ['LW', 'CAM', 'RW'], ['ST']]
                }
            },

            'juventus': {
                name: 'Juventus',
                logo: '⚫',
                stadium: 'Allianz Stadium',
                founded: 1897,
                squad: [
                    { number: 1, name: 'Wojciech Szczęsny', position: 'GK', appearances: 0, goals: 0 },
                    { number: 3, name: 'Bremer', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 5, name: 'Manuel Locatelli', position: 'MID', appearances: 0, goals: 0 },
                    { number: 7, name: 'Federico Chiesa', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 9, name: 'Dušan Vlahović', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '3-5-2',
                    style: ['Defensive solidity', 'Counter-attacking', 'Midfield control'],
                    positions: [['GK'], ['CB', 'CB', 'CB'], ['RWB', 'CM', 'CM', 'LWB'], ['ST', 'ST']]
                }
            },

            'napoli': {
                name: 'Napoli',
                logo: '🔵',
                stadium: 'Stadio Diego Armando Maradona',
                founded: 1926,
                squad: [
                    { number: 1, name: 'Alex Meret', position: 'GK', appearances: 0, goals: 0 },
                    { number: 13, name: 'Amir Rrahmani', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 99, name: 'Stanislav Lobotka', position: 'MID', appearances: 0, goals: 0 },
                    { number: 77, name: 'Khvicha Kvaratskhelia', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 9, name: 'Victor Osimhen', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['High pressing', 'Quick attacking', 'Intense tempo'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            // LIGUE 1 TEAMS
            'psg': {
                name: 'Paris Saint-Germain',
                logo: '🔵',
                stadium: 'Parc des Princes',
                founded: 1970,
                squad: [
                    { number: 1, name: 'Gianluigi Donnarumma', position: 'GK', appearances: 0, goals: 0 },
                    { number: 2, name: 'Achraf Hakimi', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Fabián Ruiz', position: 'MID', appearances: 0, goals: 0 },
                    { number: 17, name: 'Vitinha', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Ousmane Dembélé', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 29, name: 'Bradley Barcola', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Possession football', 'High pressing', 'Quick transitions'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'marseille': {
                name: 'Olympique de Marseille',
                logo: '🔵',
                stadium: 'Stade Vélodrome',
                founded: 1899,
                squad: [
                    { number: 1, name: 'Pau López', position: 'GK', appearances: 0, goals: 0 },
                    { number: 5, name: 'Leonardo Balerdi', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 10, name: 'Alexis Sánchez', position: 'FWD', appearances: 0, goals: 0 },
                    { number: 7, name: 'Pierre-Emerick Aubameyang', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Aggressive pressing', 'Direct play', 'High intensity'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'lyon': {
                name: 'Olympique Lyonnais',
                logo: '🔵',
                stadium: 'Groupama Stadium',
                founded: 1950,
                squad: [
                    { number: 1, name: 'Anthony Lopes', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'Castello Lukeba', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 8, name: 'Corentin Tolisso', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Alexandre Lacazette', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-3-3',
                    style: ['Technical football', 'Youth development', 'Attacking play'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CM', 'CM', 'CM'], ['LW', 'ST', 'RW']]
                }
            },

            'monaco': {
                name: 'AS Monaco',
                logo: '🔴',
                stadium: 'Stade Louis II',
                founded: 1924,
                squad: [
                    { number: 16, name: 'Philipp Köhn', position: 'GK', appearances: 0, goals: 0 },
                    { number: 5, name: 'Thilo Kehrer', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 17, name: 'Aleksandr Golovin', position: 'MID', appearances: 0, goals: 0 },
                    { number: 10, name: 'Wissam Ben Yedder', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '4-2-3-1',
                    style: ['Counter-attacking', 'Youth integration', 'Quick transitions'],
                    positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['CDM', 'CDM'], ['LW', 'CAM', 'RW'], ['ST']]
                }
            },

            'lens': {
                name: 'RC Lens',
                logo: '🟡',
                stadium: 'Stade Bollaert-Delelis',
                founded: 1906,
                squad: [
                    { number: 30, name: 'Brice Samba', position: 'GK', appearances: 0, goals: 0 },
                    { number: 4, name: 'Kevin Danso', position: 'DEF', appearances: 0, goals: 0 },
                    { number: 7, name: 'Florian Sotoca', position: 'FWD', appearances: 0, goals: 0 }
                ],
                news: [],
                matches: [],
                tactics: {
                    formation: '3-4-3',
                    style: ['High energy', 'Pressing game', 'Attacking football'],
                    positions: [['GK'], ['CB', 'CB', 'CB'], ['RM', 'CM', 'CM', 'LM'], ['RW', 'ST', 'LW']]
                }
            }
        };

        console.log('💾 Saving default data to localStorage...');
        saveData();
        console.log('✅ Default data saved! Leagues:', leagues.length);
    }
}

// Save data to localStorage
function saveData() {
    localStorage.setItem('leagues', JSON.stringify(leagues));
    localStorage.setItem('teams', JSON.stringify(teams));
    localStorage.setItem('teamDetails', JSON.stringify(teamDetails));
}

// Admin Panel Functions
function toggleAdmin() {
    const panel = document.getElementById('adminPanel');
    panel.classList.toggle('active');
    updateAdminSelects();
}

function switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    document.querySelectorAll('.admin-form').forEach(form => {
        form.classList.remove('active');
    });
    document.getElementById('admin-' + tabName).classList.add('active');
    
    // Load manage leagues list when switching to that tab
    if (tabName === 'manage') {
        loadManageLeagues();
    }
    
    // Load teams for management when switching to that tab
    if (tabName === 'manageteams') {
        // Populate league filter
        const filterSelect = document.getElementById('manageTeamsLeagueFilter');
        filterSelect.innerHTML = '<option value="">All Leagues</option>';
        leagues.forEach(league => {
            const option = document.createElement('option');
            option.value = league.id;
            option.textContent = league.name;
            filterSelect.appendChild(option);
        });
        loadTeamsForManagement();
    }
    
    // Load players for management when switching to that tab
    if (tabName === 'manageplayers') {
        // Populate team filter with all teams from all leagues
        const filterSelect = document.getElementById('managePlayersTeamFilter');
        filterSelect.innerHTML = '<option value="">All Teams</option>';
        
        for (let leagueId in teams) {
            const league = leagues.find(l => l.id === leagueId);
            if (league && teams[leagueId]) {
                teams[leagueId].forEach(team => {
                    const option = document.createElement('option');
                    option.value = team.id;
                    option.textContent = `${team.name} (${league.name})`;
                    filterSelect.appendChild(option);
                });
            }
        }
        
        loadPlayersForManagement();
    }
}

function updateAdminSelects() {
    // Update league select for teams
    const teamLeagueSelect = document.getElementById('teamLeague');
    teamLeagueSelect.innerHTML = '<option value="">Choose a league...</option>';
    leagues.forEach(league => {
        const option = document.createElement('option');
        option.value = league.id;
        option.textContent = league.name;
        teamLeagueSelect.appendChild(option);
    });

    // Update team select for players
    const playerTeamSelect = document.getElementById('playerTeam');
    playerTeamSelect.innerHTML = '<option value="">Choose a team...</option>';
    Object.keys(teams).forEach(leagueId => {
        const league = leagues.find(l => l.id === leagueId);
        if (league) {
            const optgroup = document.createElement('optgroup');
            optgroup.label = league.name;
            teams[leagueId].forEach(team => {
                const option = document.createElement('option');
                option.value = team.id;
                option.textContent = team.name;
                optgroup.appendChild(option);
            });
            playerTeamSelect.appendChild(optgroup);
        }
    });
}

// Image Preview Functions
function setupImagePreview(inputId, previewId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                preview.innerHTML = `<img src="${event.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        }
    });
}

// Add League
function addLeague(event) {
    event.preventDefault();
    
    const name = document.getElementById('leagueName').value;
    const country = document.getElementById('leagueCountry').value;
    const logoFile = document.getElementById('leagueLogo').files[0];
    
    if (!logoFile) {
        alert('Please select a logo image');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const id = name.toLowerCase().replace(/\s+/g, '-');
        
        leagues.push({
            id: id,
            name: name,
            country: country,
            logo: e.target.result
        });
        
        teams[id] = [];
        
        saveData();
        alert('League added successfully!');
        event.target.reset();
        document.getElementById('leagueLogoPreview').innerHTML = '';
        showLeagues();
    };
    reader.readAsDataURL(logoFile);
}

// Add Team
function addTeam(event) {
    event.preventDefault();
    
    const leagueId = document.getElementById('teamLeague').value;
    const name = document.getElementById('teamName').value;
    const stadium = document.getElementById('teamStadium').value;
    const founded = document.getElementById('teamFounded').value;
    const logoFile = document.getElementById('teamLogo').files[0];
    
    if (!leagueId) {
        alert('Please select a league');
        return;
    }
    
    if (!logoFile) {
        alert('Please select a logo image');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        const id = name.toLowerCase().replace(/\s+/g, '-');
        
        teams[leagueId].push({
            id: id,
            name: name,
            logo: e.target.result
        });
        
        teamDetails[id] = {
            name: name,
            logo: e.target.result,
            stadium: stadium,
            founded: parseInt(founded),
            news: [],
            squad: [],
            matches: [],
            tactics: {
                formation: '4-4-2',
                style: [],
                positions: [['GK'], ['LB', 'CB', 'CB', 'RB'], ['LM', 'CM', 'CM', 'RM'], ['ST', 'ST']]
            }
        };
        
        saveData();
        alert('Team added successfully!');
        event.target.reset();
        document.getElementById('teamLogoPreview').innerHTML = '';
    };
    reader.readAsDataURL(logoFile);
}

// Add Player
function addPlayer(event) {
    event.preventDefault();
    
    const teamId = document.getElementById('playerTeam').value;
    const name = document.getElementById('playerName').value;
    const number = parseInt(document.getElementById('playerNumber').value);
    const position = document.getElementById('playerPosition').value;
    const photoFile = document.getElementById('playerPhoto').files[0];
    
    if (!teamId) {
        alert('Please select a team');
        return;
    }
    
    if (!teamDetails[teamId]) {
        alert('Team details not found');
        return;
    }
    
    const addPlayerData = (photo) => {
        teamDetails[teamId].squad.push({
            number: number,
            name: name,
            position: position,
            appearances: 0,
            goals: 0,
            photo: photo
        });
        
        saveData();
        alert('Player added successfully!');
        event.target.reset();
        document.getElementById('playerPhotoPreview').innerHTML = '';
    };
    
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            addPlayerData(e.target.result);
        };
        reader.readAsDataURL(photoFile);
    } else {
        addPlayerData(null);
    }
}

// Load Manage Leagues List
function loadManageLeagues() {
    const leaguesList = document.getElementById('leaguesList');
    
    if (leagues.length === 0) {
        leaguesList.innerHTML = '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No leagues available.</p>';
        return;
    }
    
    let html = '';
    leagues.forEach(league => {
        const logoSrc = league.logo || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text y="50" font-size="50">⚽</text></svg>';
        const teamCount = teams[league.id] ? teams[league.id].length : 0;
        
        html += `
            <div class="manage-item">
                <div class="manage-item-logo">
                    <img src="${logoSrc}" alt="${league.name}">
                </div>
                <div class="manage-item-info">
                    <h4>${league.name}</h4>
                    <p>${league.country} • ${teamCount} team${teamCount !== 1 ? 's' : ''}</p>
                </div>
                <div class="manage-item-actions">
                    <button class="btn-edit" onclick="editLeague('${league.id}')">Edit</button>
                    <button class="btn-delete" onclick="deleteLeague('${league.id}')">Delete</button>
                </div>
            </div>
        `;
    });
    
    leaguesList.innerHTML = html;
}

// Edit League
function editLeague(leagueId) {
    const league = leagues.find(l => l.id === leagueId);
    if (!league) return;
    
    document.getElementById('editLeagueId').value = leagueId;
    document.getElementById('editLeagueName').value = league.name;
    document.getElementById('editLeagueCountry').value = league.country;
    
    // Show current logo
    const preview = document.getElementById('editLeagueLogoPreview');
    if (league.logo) {
        preview.innerHTML = `<img src="${league.logo}" alt="${league.name}">`;
    }
    
    document.getElementById('editModal').classList.add('active');
}

// Close Edit Modal
function closeEditModal() {
    document.getElementById('editModal').classList.remove('active');
    document.getElementById('editLeagueLogoPreview').innerHTML = '';
}

// Update League
function updateLeague(event) {
    event.preventDefault();
    
    const leagueId = document.getElementById('editLeagueId').value;
    const name = document.getElementById('editLeagueName').value;
    const country = document.getElementById('editLeagueCountry').value;
    const logoFile = document.getElementById('editLeagueLogo').files[0];
    
    const league = leagues.find(l => l.id === leagueId);
    if (!league) return;
    
    const updateData = () => {
        league.name = name;
        league.country = country;
        
        saveData();
        closeEditModal();
        loadManageLeagues();
        alert('League updated successfully!');
        
        // Refresh the main view if we're viewing leagues
        if (currentView === 'leagues') {
            showLeagues();
        }
    };
    
    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            league.logo = e.target.result;
            updateData();
        };
        reader.readAsDataURL(logoFile);
    } else {
        updateData();
    }
}

// Delete League
function deleteLeague(leagueId) {
    const league = leagues.find(l => l.id === leagueId);
    if (!league) return;
    
    const teamCount = teams[leagueId] ? teams[leagueId].length : 0;
    
    let confirmMessage = `Are you sure you want to delete "${league.name}"?`;
    if (teamCount > 0) {
        confirmMessage += `\n\nThis will also delete ${teamCount} team${teamCount !== 1 ? 's' : ''} and all their data.`;
    }
    
    if (!confirm(confirmMessage)) return;
    
    // Remove league
    leagues = leagues.filter(l => l.id !== leagueId);
    
    // Remove all teams in this league
    if (teams[leagueId]) {
        teams[leagueId].forEach(team => {
            delete teamDetails[team.id];
        });
        delete teams[leagueId];
    }
    
    saveData();
    loadManageLeagues();
    alert('League deleted successfully!');
    
    // Go back to leagues view if we were viewing the deleted league
    if (currentView !== 'leagues') {
        goHome();
    }
}

// Load Teams for Management
function loadTeamsForManagement() {
    const filterLeagueId = document.getElementById('manageTeamsLeagueFilter').value;
    const teamsList = document.getElementById('teamsList');
    
    if (!teamsList) return;
    
    let html = '';
    let teamsToShow = [];
    
    // Gather teams based on filter
    if (filterLeagueId) {
        if (teams[filterLeagueId]) {
            teamsToShow = teams[filterLeagueId].map(team => ({
                ...team,
                leagueId: filterLeagueId,
                leagueName: leagues.find(l => l.id === filterLeagueId)?.name || ''
            }));
        }
    } else {
        // Show all teams from all leagues
        for (let leagueId in teams) {
            const leagueName = leagues.find(l => l.id === leagueId)?.name || '';
            teams[leagueId].forEach(team => {
                teamsToShow.push({
                    ...team,
                    leagueId: leagueId,
                    leagueName: leagueName
                });
            });
        }
    }
    
    if (teamsToShow.length === 0) {
        html = '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No teams found.</p>';
    } else {
        teamsToShow.forEach(team => {
            const logoDisplay = team.logo.startsWith('data:') || team.logo.startsWith('http') || team.logo.startsWith('/') ? 
                `<img src="${team.logo}" alt="${team.name}">` : 
                `<div style="font-size: 2rem;">${team.logo}</div>`;
            
            html += `
                <div class="manage-item">
                    <div class="manage-item-logo">${logoDisplay}</div>
                    <div class="manage-item-info">
                        <h4>${team.name}</h4>
                        <p>${team.leagueName}${team.stadium ? ' • ' + team.stadium : ''}${team.founded ? ' • Founded ' + team.founded : ''}</p>
                    </div>
                    <div class="manage-item-actions">
                        <button class="btn-edit" onclick="openEditTeamModal('${team.id}', '${team.leagueId}')">Edit</button>
                        <button class="btn-delete" onclick="deleteTeam('${team.id}', '${team.leagueId}')">Delete</button>
                    </div>
                </div>
            `;
        });
    }
    
    teamsList.innerHTML = html;
}

// Open Edit Team Modal
function openEditTeamModal(teamId, leagueId) {
    const team = teams[leagueId].find(t => t.id === teamId);
    if (!team) return;
    
    document.getElementById('editTeamId').value = teamId;
    document.getElementById('editTeamLeagueId').value = leagueId;
    document.getElementById('editTeamName').value = team.name;
    document.getElementById('editTeamStadium').value = team.stadium || '';
    document.getElementById('editTeamFounded').value = team.founded || '';
    
    // Show current logo
    const currentLogo = document.getElementById('currentTeamLogo');
    if (team.logo.startsWith('data:') || team.logo.startsWith('http') || team.logo.startsWith('/')) {
        currentLogo.innerHTML = `<img src="${team.logo}" style="max-width: 50px; max-height: 50px; vertical-align: middle;">`;
    } else {
        currentLogo.textContent = team.logo;
    }
    
    // Clear preview
    document.getElementById('editTeamLogoPreview').innerHTML = '';
    
    document.getElementById('editTeamModal').classList.add('active');
}

// Close Edit Team Modal
function closeEditTeamModal() {
    document.getElementById('editTeamModal').classList.remove('active');
}

// Update Team
function updateTeam(event) {
    event.preventDefault();
    
    const teamId = document.getElementById('editTeamId').value;
    const leagueId = document.getElementById('editTeamLeagueId').value;
    const name = document.getElementById('editTeamName').value;
    const stadium = document.getElementById('editTeamStadium').value;
    const founded = document.getElementById('editTeamFounded').value;
    const logoFile = document.getElementById('editTeamLogo').files[0];
    
    // Find and update team
    const team = teams[leagueId].find(t => t.id === teamId);
    if (!team) {
        alert('Team not found!');
        return;
    }
    
    team.name = name;
    team.stadium = stadium;
    team.founded = founded ? parseInt(founded) : null;
    
    // Update logo if new file provided
    if (logoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            team.logo = e.target.result;
            
            // Also update in teamDetails if exists
            if (teamDetails[teamId]) {
                teamDetails[teamId].name = name;
                teamDetails[teamId].logo = e.target.result;
                teamDetails[teamId].stadium = stadium;
            }
            
            saveData();
            closeEditTeamModal();
            loadTeamsForManagement();
            alert('Team updated successfully!');
        };
        reader.readAsDataURL(logoFile);
    } else {
        // Update without logo change
        if (teamDetails[teamId]) {
            teamDetails[teamId].name = name;
            teamDetails[teamId].stadium = stadium;
        }
        
        saveData();
        closeEditTeamModal();
        loadTeamsForManagement();
        alert('Team updated successfully!');
    }
    
    return false;
}

// Delete Team
function deleteTeam(teamId, leagueId) {
    if (!confirm('Are you sure you want to delete this team? This action cannot be undone.')) {
        return;
    }
    
    // Remove from teams array
    teams[leagueId] = teams[leagueId].filter(t => t.id !== teamId);
    
    // Remove from teamDetails
    delete teamDetails[teamId];
    
    saveData();
    loadTeamsForManagement();
    alert('Team deleted successfully!');
}

// Load Players for Management
function loadPlayersForManagement() {
    const filterTeamId = document.getElementById('managePlayersTeamFilter').value;
    const playersList = document.getElementById('playersList');
    
    if (!playersList) return;
    
    let html = '';
    let playersToShow = [];
    
    // Gather players based on filter
    if (filterTeamId) {
        if (teamDetails[filterTeamId] && teamDetails[filterTeamId].squad) {
            const teamInfo = teamDetails[filterTeamId];
            teamInfo.squad.forEach((player, index) => {
                playersToShow.push({
                    ...player,
                    teamId: filterTeamId,
                    teamName: teamInfo.name,
                    playerIndex: index
                });
            });
        }
    } else {
        // Show all players from all teams
        for (let teamId in teamDetails) {
            if (teamDetails[teamId].squad) {
                const teamInfo = teamDetails[teamId];
                teamInfo.squad.forEach((player, index) => {
                    playersToShow.push({
                        ...player,
                        teamId: teamId,
                        teamName: teamInfo.name,
                        playerIndex: index
                    });
                });
            }
        }
    }
    
    if (playersToShow.length === 0) {
        html = '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No players found. Add players using the "Add Player" tab.</p>';
    } else {
        playersToShow.forEach(player => {
            const photoDisplay = player.photo ? 
                `<img src="${player.photo}" alt="${player.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">` : 
                `<div style="font-size: 2rem; display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: rgba(255,165,0,0.2); border-radius: 50%;">👤</div>`;
            
            const positionBadge = player.position ? `<span class="player-position-badge">${player.position}</span>` : '';
            
            html += `
                <div class="manage-item">
                    <div class="manage-item-logo" style="border-radius: 50%;">${photoDisplay}</div>
                    <div class="manage-item-info">
                        <h4>#${player.number} ${player.name}</h4>
                        <p>${player.teamName} ${positionBadge ? '• ' : ''}${positionBadge}</p>
                    </div>
                    <div class="manage-item-actions">
                        <button class="btn-edit" onclick="openEditPlayerModal('${player.teamId}', ${player.playerIndex})">Edit</button>
                        <button class="btn-delete" onclick="deletePlayer('${player.teamId}', ${player.playerIndex})">Delete</button>
                    </div>
                </div>
            `;
        });
    }
    
    playersList.innerHTML = html;
}

// Open Edit Player Modal
function openEditPlayerModal(teamId, playerIndex) {
    const team = teamDetails[teamId];
    if (!team || !team.squad || !team.squad[playerIndex]) return;
    
    const player = team.squad[playerIndex];
    
    document.getElementById('editPlayerTeamId').value = teamId;
    document.getElementById('editPlayerIndex').value = playerIndex;
    document.getElementById('editPlayerName').value = player.name;
    document.getElementById('editPlayerNumber').value = player.number;
    document.getElementById('editPlayerPosition').value = player.position || '';
    
    // Show current photo
    const currentPhoto = document.getElementById('currentPlayerPhoto');
    if (player.photo) {
        currentPhoto.innerHTML = `<img src="${player.photo}" style="max-width: 50px; max-height: 50px; border-radius: 50%; vertical-align: middle;">`;
    } else {
        currentPhoto.textContent = 'No photo';
    }
    
    // Clear preview
    document.getElementById('editPlayerPhotoPreview').innerHTML = '';
    
    document.getElementById('editPlayerModal').classList.add('active');
}

// Close Edit Player Modal
function closeEditPlayerModal() {
    document.getElementById('editPlayerModal').classList.remove('active');
}

// Update Player
function updatePlayer(event) {
    event.preventDefault();
    
    const teamId = document.getElementById('editPlayerTeamId').value;
    const playerIndex = parseInt(document.getElementById('editPlayerIndex').value);
    const name = document.getElementById('editPlayerName').value;
    const number = parseInt(document.getElementById('editPlayerNumber').value);
    const position = document.getElementById('editPlayerPosition').value;
    const photoFile = document.getElementById('editPlayerPhoto').files[0];
    
    const team = teamDetails[teamId];
    if (!team || !team.squad || !team.squad[playerIndex]) {
        alert('Player not found!');
        return;
    }
    
    const player = team.squad[playerIndex];
    
    // Update player info
    player.name = name;
    player.number = number;
    player.position = position;
    
    // Update photo if new file provided
    if (photoFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            player.photo = e.target.result;
            
            saveData();
            closeEditPlayerModal();
            loadPlayersForManagement();
            alert('Player updated successfully!');
        };
        reader.readAsDataURL(photoFile);
    } else {
        // Update without photo change
        saveData();
        closeEditPlayerModal();
        loadPlayersForManagement();
        alert('Player updated successfully!');
    }
    
    return false;
}

// Delete Player
function deletePlayer(teamId, playerIndex) {
    const team = teamDetails[teamId];
    if (!team || !team.squad) return;
    
    const player = team.squad[playerIndex];
    if (!confirm(`Are you sure you want to delete ${player.name}? This action cannot be undone.`)) {
        return;
    }
    
    // Remove player from squad
    team.squad.splice(playerIndex, 1);
    
    saveData();
    loadPlayersForManagement();
    alert('Player deleted successfully!');
}

// Initialize App
function init() {
    console.log('🏁 Initializing SPORTIFY...');
    initializeDefaultData();
    console.log('📊 Data loaded:', {
        leagues: leagues.length,
        totalTeams: Object.keys(teams).reduce((sum, key) => sum + teams[key].length, 0),
        teamDetailsCount: Object.keys(teamDetails).length
    });
    
    // Setup image previews
    setupImagePreview('leagueLogo', 'leagueLogoPreview');
    setupImagePreview('teamLogo', 'teamLogoPreview');
    setupImagePreview('playerPhoto', 'playerPhotoPreview');
    setupImagePreview('editLeagueLogo', 'editLeagueLogoPreview');
    setupImagePreview('editTeamLogo', 'editTeamLogoPreview');
    setupImagePreview('editPlayerPhoto', 'editPlayerPhotoPreview');
    
    showLeagues();
    console.log('✅ SPORTIFY initialized successfully!');
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
        const logoSrc = league.logo || 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text y="50" font-size="50">⚽</text></svg>';
        html += `
            <div class="league-card" onclick="showTeams('${league.id}')">
                <div class="league-icon">
                    <img src="${logoSrc}" alt="${league.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\'><text y=\\'50\\' font-size=\\'50\\'>⚽</text></svg>'">
                </div>
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
    
    if (teams[leagueId] && teams[leagueId].length > 0) {
        teams[leagueId].forEach(team => {
            const logoSrc = team.logo.startsWith('data:') || team.logo.startsWith('http') || team.logo.startsWith('/') ? team.logo : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text y="60" font-size="60">' + team.logo + '</text></svg>';
            html += `
                <div class="team-card" onclick="showTeamDetails('${team.id}')">
                    <div class="team-logo">
                        <img src="${logoSrc}" alt="${team.name}" onerror="this.parentElement.innerHTML='${team.logo}'">
                    </div>
                    <div class="team-name">${team.name}</div>
                </div>
            `;
        });
    } else {
        html += '<p style="grid-column: 1/-1; text-align: center; color: #b0b0b0;">No teams available. Add teams using the Admin panel.</p>';
    }
    
    html += '</div>';
    app.innerHTML = html;
}

// Show Team Details
function showTeamDetails(teamId) {
    currentView = 'team';
    const team = teamDetails[teamId];
    if (!team) {
        alert('Team details not available. Please add team information using the Admin panel.');
        return;
    }
    
    selectedTeam = team;
    const app = document.getElementById('app');
    
    let html = showBreadcrumb();
    
    const logoSrc = team.logo.startsWith('data:') || team.logo.startsWith('http') || team.logo.startsWith('/') ? team.logo : 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><text y="60" font-size="60">' + team.logo + '</text></svg>';
    
    // Team Header
    html += `
        <div class="team-header">
            <div class="team-header-logo">
                <img src="${logoSrc}" alt="${team.name}" onerror="this.parentElement.innerHTML='${team.logo}'">
            </div>
            <div class="team-header-info">
                <h1>${team.name}</h1>
                <p>Stadium: ${team.stadium || 'N/A'} • Founded: ${team.founded || 'N/A'}</p>
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
    if (team.news && team.news.length > 0) {
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
        html += '</div>';
    } else {
        html += '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No news available.</p>';
    }
    html += '</div>';
    
    // Squad Tab
    html += '<div id="tab-squad" class="tab-content">';
    if (team.squad && team.squad.length > 0) {
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
        html += '</div>';
    } else {
        html += '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No squad information available. Add players using the Admin panel.</p>';
    }
    html += '</div>';
    
    // Matches Tab
    html += '<div id="tab-matches" class="tab-content">';
    if (team.matches && team.matches.length > 0) {
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
        html += '</div>';
    } else {
        html += '<p style="text-align: center; color: #b0b0b0; padding: 2rem;">No match information available.</p>';
    }
    html += '</div>';
    
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
    `;
    
    if (team.tactics.style && team.tactics.style.length > 0) {
        html += '<ul class="tactics-list">';
        team.tactics.style.forEach(point => {
            html += `<li>${point}</li>`;
        });
        html += '</ul>';
    } else {
        html += '<p style="color: #b0b0b0;">No tactics information available.</p>';
    }
    
    html += `
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