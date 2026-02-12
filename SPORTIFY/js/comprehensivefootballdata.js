// COMPREHENSIVE FOOTBALL DATA - 2025-26 SEASON
// Premier League, La Liga, Serie A, Ligue 1
// Note: Add logo images via Admin Panel or replace 'LOGO_PLACEHOLDER' with actual image paths
console.log(localStorage.getItem('teams'));
const COMPREHENSIVE_DATA = {
    leagues: [
        { id: 'premier-league', name: 'Premier League', country: 'England', logo: '/mnt/user-data/uploads/pl__1_.png' },
        { id: 'la-liga', name: 'La Liga', country: 'Spain', logo: '/mnt/user-data/uploads/lal.png' },
        { id: 'serie-a', name: 'Serie A', country: 'Italy', logo: '/mnt/user-data/uploads/ser.png' },
        { id: 'bundesliga', name: 'Bundesliga', country: 'Germany', logo: '/mnt/user-data/uploads/bun.png' },
        { id: 'ligue-1', name: 'Ligue 1', country: 'France', logo: '/mnt/user-data/uploads/lig.png' }
    ],
    
    teams: {
        'premier-league': [
            { id: 'arsenal', name: 'Arsenal', logo: 'LOGO_PLACEHOLDER', stadium: 'Emirates Stadium', founded: 1886 },
            { id: 'aston-villa', name: 'Aston Villa', logo: 'LOGO_PLACEHOLDER', stadium: 'Villa Park', founded: 1874 },
            { id: 'bournemouth', name: 'AFC Bournemouth', logo: 'LOGO_PLACEHOLDER', stadium: 'Vitality Stadium', founded: 1899 },
            { id: 'brentford', name: 'Brentford', logo: 'LOGO_PLACEHOLDER', stadium: 'Gtech Community Stadium', founded: 1889 },
            { id: 'brighton', name: 'Brighton & Hove Albion', logo: 'LOGO_PLACEHOLDER', stadium: 'American Express Stadium', founded: 1901 },
            { id: 'burnley', name: 'Burnley', logo: 'LOGO_PLACEHOLDER', stadium: 'Turf Moor', founded: 1882 },
            { id: 'chelsea', name: 'Chelsea', logo: 'LOGO_PLACEHOLDER', stadium: 'Stamford Bridge', founded: 1905 },
            { id: 'crystal-palace', name: 'Crystal Palace', logo: 'LOGO_PLACEHOLDER', stadium: 'Selhurst Park', founded: 1905 },
            { id: 'everton', name: 'Everton', logo: 'LOGO_PLACEHOLDER', stadium: 'Hill Dickinson Stadium', founded: 1878 },
            { id: 'fulham', name: 'Fulham', logo: 'LOGO_PLACEHOLDER', stadium: 'Craven Cottage', founded: 1879 },
            { id: 'leeds-united', name: 'Leeds United', logo: 'LOGO_PLACEHOLDER', stadium: 'Elland Road', founded: 1919 },
            { id: 'liverpool', name: 'Liverpool', logo: 'LOGO_PLACEHOLDER', stadium: 'Anfield', founded: 1892 },
            { id: 'man-city', name: 'Manchester City', logo: 'LOGO_PLACEHOLDER', stadium: 'Etihad Stadium', founded: 1880 },
            { id: 'man-utd', name: 'Manchester United', logo: 'LOGO_PLACEHOLDER', stadium: 'Old Trafford', founded: 1878 },
            { id: 'newcastle', name: 'Newcastle United', logo: 'LOGO_PLACEHOLDER', stadium: 'St James\' Park', founded: 1892 },
            { id: 'nottingham', name: 'Nottingham Forest', logo: 'LOGO_PLACEHOLDER', stadium: 'City Ground', founded: 1865 },
            { id: 'sunderland', name: 'Sunderland', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadium of Light', founded: 1879 },
            { id: 'tottenham', name: 'Tottenham Hotspur', logo: 'LOGO_PLACEHOLDER', stadium: 'Tottenham Hotspur Stadium', founded: 1882 },
            { id: 'west-ham', name: 'West Ham United', logo: 'LOGO_PLACEHOLDER', stadium: 'London Stadium', founded: 1895 },
            { id: 'wolves', name: 'Wolverhampton Wanderers', logo: 'LOGO_PLACEHOLDER', stadium: 'Molineux Stadium', founded: 1877 }
        ],
        
        'la-liga': [
            { id: 'athletic-bilbao', name: 'Athletic Bilbao', logo: 'LOGO_PLACEHOLDER', stadium: 'San Mamés', founded: 1898 },
            { id: 'atletico-madrid', name: 'Atlético Madrid', logo: 'LOGO_PLACEHOLDER', stadium: 'Cívitas Metropolitano', founded: 1903 },
            { id: 'barcelona', name: 'FC Barcelona', logo: 'LOGO_PLACEHOLDER', stadium: 'Camp Nou', founded: 1899 },
            { id: 'celta-vigo', name: 'Celta Vigo', logo: 'LOGO_PLACEHOLDER', stadium: 'Balaídos', founded: 1923 },
            { id: 'elche', name: 'Elche CF', logo: 'LOGO_PLACEHOLDER', stadium: 'Martínez Valero', founded: 1923 },
            { id: 'espanyol', name: 'RCD Espanyol', logo: 'LOGO_PLACEHOLDER', stadium: 'RCDE Stadium', founded: 1900 },
            { id: 'getafe', name: 'Getafe CF', logo: 'LOGO_PLACEHOLDER', stadium: 'Coliseum Alfonso Pérez', founded: 1983 },
            { id: 'girona', name: 'Girona FC', logo: 'LOGO_PLACEHOLDER', stadium: 'Estadi Montilivi', founded: 1930 },
            { id: 'levante', name: 'Levante UD', logo: 'LOGO_PLACEHOLDER', stadium: 'Ciutat de València', founded: 1909 },
            { id: 'mallorca', name: 'RCD Mallorca', logo: 'LOGO_PLACEHOLDER', stadium: 'Visit Mallorca Stadium', founded: 1916 },
            { id: 'osasuna', name: 'CA Osasuna', logo: 'LOGO_PLACEHOLDER', stadium: 'El Sadar', founded: 1920 },
            { id: 'oviedo', name: 'Real Oviedo', logo: 'LOGO_PLACEHOLDER', stadium: 'Carlos Tartiere', founded: 1926 },
            { id: 'rayo-vallecano', name: 'Rayo Vallecano', logo: 'LOGO_PLACEHOLDER', stadium: 'Campo de Fútbol de Vallecas', founded: 1924 },
            { id: 'real-betis', name: 'Real Betis', logo: 'LOGO_PLACEHOLDER', stadium: 'Benito Villamarín', founded: 1907 },
            { id: 'real-madrid', name: 'Real Madrid', logo: 'LOGO_PLACEHOLDER', stadium: 'Santiago Bernabéu', founded: 1902 },
            { id: 'real-sociedad', name: 'Real Sociedad', logo: 'LOGO_PLACEHOLDER', stadium: 'Anoeta', founded: 1909 },
            { id: 'sevilla', name: 'Sevilla FC', logo: 'LOGO_PLACEHOLDER', stadium: 'Ramón Sánchez Pizjuán', founded: 1890 },
            { id: 'valencia', name: 'Valencia CF', logo: 'LOGO_PLACEHOLDER', stadium: 'Mestalla', founded: 1919 },
            { id: 'villarreal', name: 'Villarreal CF', logo: 'LOGO_PLACEHOLDER', stadium: 'Estadio de la Cerámica', founded: 1923 },
            { id: 'alaves', name: 'Deportivo Alavés', logo: 'LOGO_PLACEHOLDER', stadium: 'Mendizorroza', founded: 1921 }
        ],
        
        'serie-a': [
            { id: 'atalanta', name: 'Atalanta', logo: 'LOGO_PLACEHOLDER', stadium: 'Gewiss Stadium', founded: 1907 },
            { id: 'bologna', name: 'Bologna', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Renato Dall\'Ara', founded: 1909 },
            { id: 'cagliari', name: 'Cagliari', logo: 'LOGO_PLACEHOLDER', stadium: 'Unipol Domus', founded: 1920 },
            { id: 'como', name: 'Como 1907', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Giuseppe Sinigaglia', founded: 1907 },
            { id: 'cremonese', name: 'Cremonese', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Giovanni Zini', founded: 1903 },
            { id: 'fiorentina', name: 'Fiorentina', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Artemio Franchi', founded: 1926 },
            { id: 'genoa', name: 'Genoa', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Luigi Ferraris', founded: 1893 },
            { id: 'inter', name: 'Inter Milan', logo: 'LOGO_PLACEHOLDER', stadium: 'San Siro', founded: 1908 },
            { id: 'juventus', name: 'Juventus', logo: 'LOGO_PLACEHOLDER', stadium: 'Allianz Stadium', founded: 1897 },
            { id: 'lazio', name: 'Lazio', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Olimpico', founded: 1900 },
            { id: 'lecce', name: 'Lecce', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Via del Mare', founded: 1908 },
            { id: 'milan', name: 'AC Milan', logo: 'LOGO_PLACEHOLDER', stadium: 'San Siro', founded: 1899 },
            { id: 'napoli', name: 'Napoli', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Diego Armando Maradona', founded: 1926 },
            { id: 'parma', name: 'Parma', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Ennio Tardini', founded: 1913 },
            { id: 'pisa', name: 'Pisa', logo: 'LOGO_PLACEHOLDER', stadium: 'Arena Garibaldi', founded: 1909 },
            { id: 'roma', name: 'AS Roma', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Olimpico', founded: 1927 },
            { id: 'sassuolo', name: 'Sassuolo', logo: 'LOGO_PLACEHOLDER', stadium: 'Mapei Stadium', founded: 1920 },
            { id: 'torino', name: 'Torino', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Olimpico Grande Torino', founded: 1906 },
            { id: 'udinese', name: 'Udinese', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Friuli', founded: 1896 },
            { id: 'verona', name: 'Hellas Verona', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadio Marcantonio Bentegodi', founded: 1903 }
        ],
        
        'ligue-1': [
            { id: 'angers', name: 'Angers SCO', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Raymond Kopa', founded: 1919 },
            { id: 'auxerre', name: 'AJ Auxerre', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade de l\'Abbé-Deschamps', founded: 1905 },
            { id: 'brest', name: 'Stade Brestois', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Francis-Le Blé', founded: 1950 },
            { id: 'le-havre', name: 'Le Havre AC', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Océane', founded: 1894 },
            { id: 'lens', name: 'RC Lens', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Bollaert-Delelis', founded: 1906 },
            { id: 'lille', name: 'Lille OSC', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Pierre-Mauroy', founded: 1944 },
            { id: 'lorient', name: 'FC Lorient', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade du Moustoir', founded: 1926 },
            { id: 'lyon', name: 'Olympique Lyonnais', logo: 'LOGO_PLACEHOLDER', stadium: 'Groupama Stadium', founded: 1950 },
            { id: 'marseille', name: 'Olympique de Marseille', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Vélodrome', founded: 1899 },
            { id: 'metz', name: 'FC Metz', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Saint-Symphorien', founded: 1932 },
            { id: 'monaco', name: 'AS Monaco', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Louis II', founded: 1924 },
            { id: 'nantes', name: 'FC Nantes', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade de la Beaujoire', founded: 1943 },
            { id: 'nice', name: 'OGC Nice', logo: 'LOGO_PLACEHOLDER', stadium: 'Allianz Riviera', founded: 1904 },
            { id: 'paris-fc', name: 'Paris FC', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade Charléty', founded: 1969 },
            { id: 'psg', name: 'Paris Saint-Germain', logo: 'LOGO_PLACEHOLDER', stadium: 'Parc des Princes', founded: 1970 },
            { id: 'rennes', name: 'Stade Rennais', logo: 'LOGO_PLACEHOLDER', stadium: 'Roazhon Park', founded: 1901 },
            { id: 'strasbourg', name: 'RC Strasbourg Alsace', logo: 'LOGO_PLACEHOLDER', stadium: 'Stade de la Meinau', founded: 1906 },
            { id: 'toulouse', name: 'Toulouse FC', logo: 'LOGO_PLACEHOLDER', stadium: 'Stadium de Toulouse', founded: 1970 }
        ]
    },
    
    // Sample players for major teams (you can expand this)
    teamDetails: {
        // PREMIER LEAGUE
        'arsenal': {
            name: 'Arsenal',
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
        
        // LA LIGA
        'barcelona': {
            name: 'FC Barcelona',
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
            stadium: 'Santiago Bernabéu',
            founded: 1902,
            squad: [
                { number: 1, name: 'Thibaut Courtois', position: 'GK', appearances: 0, goals: 0 },
                { number: 4, name: 'David Alaba', position: 'DEF', appearances: 0, goals: 0 },
                { number: 10, name: 'Luka Modrić', position: 'MID', appearances: 0, goals: 0 },
                { number: 8, name: 'Toni Kroos', position: 'MID', appearances: 0, goals: 0 },
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
            logo: 'LOGO_PLACEHOLDER',
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
        
        // SERIE A
        'inter': {
            name: 'Inter Milan',
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
        
        // LIGUE 1
        'psg': {
            name: 'Paris Saint-Germain',
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
            logo: 'LOGO_PLACEHOLDER',
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
    }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COMPREHENSIVE_DATA;
}