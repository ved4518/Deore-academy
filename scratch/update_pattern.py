import os

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Locate MPSC course section
marker_start = 'id: "mpsc",'
marker_pattern = 'patternOverview:'

if marker_start in text and marker_pattern in text:
    # find stages block for mpsc
    idx_mpsc = text.find(marker_start)
    idx_stages = text.find('stages: [', idx_mpsc)
    idx_stages_end = text.find('],', idx_stages) + 2

    old_stages_block = text[idx_stages:idx_stages_end]
    print('Found old block:', repr(old_stages_block[:100]))

    new_block = '''stages: [
          {
            stageNumber: "01",
            title: "Preliminary Examination",
            type: "Objective Screening (2 Papers)",
            marks: "400 Marks",
            details: "Paper 1 (Compulsory): 200 Marks, 2 Hours, Degree level, Marathi & English, Objective. Paper 2 (Language/CSAT): 200 Marks, 2 Hours, Subjects 1–5: Degree level; Subject 6: 12th level; Subject 7: 10th/12th level, Marathi & English, Objective type."
          },
          {
            stageNumber: "02",
            title: "Main Examination (Qualifying & Merit Papers)",
            type: "Descriptive Written Papers",
            marks: "1250 Merit + 600 Qualifying",
            details: "Qualifying Papers (25% minimum marks): Language Paper 1 (Marathi) - 300 Marks & Language Paper 2 (English) - 300 Marks. Merit Papers: Essay (Marathi/English) - 250 Marks, General Studies 1 to 4 - 250 Marks each. Total Written Merit: 1250 Marks."
          },
          {
            stageNumber: "03",
            title: "Personality Test / Interview",
            type: "MPSC Board Interview",
            marks: "175 Marks",
            details: "Conducted for candidates qualifying the Main written merit list. Interview: 175 Marks. Grand Total (Written Merit 1250 + Interview 175): 1425 Marks."
          }
        ],
        patternImage: "assets/images/mpsc-rajyaseva-pattern.png",
        patternTables: {
          prelims: {
            title: "Preliminary Examination Pattern",
            headers: ["Paper No.", "Marks", "Duration", "Standard / Level", "Medium", "Nature of Paper"],
            rows: [
              ["Paper 1 (Compulsory)", "200", "2 hours", "Degree level", "Marathi and English", "Objective type"],
              ["Paper 2 (Language)", "200", "2 hours", "Subjects 1–5: Degree level; Subject 6: 12th standard level; Subject 7: 10th/12th standard level", "Marathi and English", "Objective type"]
            ]
          },
          qualifying: {
            title: "Main Examination – Qualifying Papers",
            headers: ["No.", "Paper", "Marks"],
            rows: [
              ["1", "Language Paper 1 – Marathi", "300 marks (Qualifying with 25% minimum marks)"],
              ["2", "Language Paper 2 – English", "300 marks (Qualifying with 25% minimum marks)"]
            ]
          },
          merit: {
            title: "Main Examination – Papers Considered for Merit List and Their Marks",
            headers: ["No.", "Paper", "Marks"],
            rows: [
              ["1", "Essay (Marathi / English Medium)", "250 marks"],
              ["2", "General Studies 1", "250 marks"],
              ["3", "General Studies 2", "250 marks"],
              ["4", "General Studies 3", "250 marks"],
              ["5", "General Studies 4", "250 marks"]
            ],
            total: "1250 marks",
            interview: "175 marks",
            grandTotal: "1425 marks"
          }
        },'''

    updated_text = text[:idx_stages] + new_block + text[idx_stages_end:]

    with open('js/data.js', 'w', encoding='utf-8') as f:
        f.write(updated_text)

    with open('public/js/data.js', 'w', encoding='utf-8') as f:
        f.write(updated_text)

    print('Successfully updated js/data.js and public/js/data.js')
else:
    print('Failed to find markers')
