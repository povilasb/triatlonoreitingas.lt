import json
from pyexcel_xlsx import get_data


def main():
    data = get_data('../reitingas.xlsx')
    sheet = data['Bendra įskaita']
    headers_row = 2
    headers = sheet[headers_row]
    cols = [headers.index(h) for h in ['Dalyvis', 'Visų taškų suma']]

    stats_rows = filter(lambda row: len(row) > 1 and type(row[0]) is int,
                        sheet)
    stats_rows = map(lambda row: {'name': row[cols[0]], 'score': row[cols[1]]},
                     stats_rows)
    write_json_to('stats.json', list(stats_rows))


def write_json_to(fname: str, data: dict) -> None:
    with open(fname, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)


main()
