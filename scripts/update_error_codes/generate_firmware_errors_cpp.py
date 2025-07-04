#!/usr/bin/env python3

# This script pulls error codes from an Excel file and generates a C++ data structure.
# The structure is: inline static const std::map<uint8_t, std::vector<std::string>> FIRMWARE_ERRORS = {
#   {error_num, {"Error Title", "Troubleshooting Notes"}},
# };

import os
import gspread

def generate_cpp_map(errors, output_path):
    """Generate a C++ map from the error data."""
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('#include <map>\n#include <vector>\n#include <string>\n\n')
        f.write('inline static const std::map<uint8_t, std::vector<std::string>> FIRMWARE_ERRORS = {\n')
        for error in errors:
            error_num = error[0]
            error_title = error[1].replace('"', '\"') if error[1] else ''
            error_notes = error[2].replace('"', '\"') if error[2] else ''
            f.write(f'    {{{error_num}, {{"{error_title}", "{error_notes}"}}}},\n')
        f.write('};\n')

if __name__ == '__main__':
    # Use Google Sheets API as before
    gc = gspread.service_account(
        filename=os.environ.get('GOOGLE_SHEET_CREDENTIALS', './service_account.json')
    )
    sh = gc.open_by_key('1GcQOTUiUgADPrYiLwWsgM9B8dvKHKgTAl_bsJcpXKm0')
    categories = sh.get_worksheet(0).get_all_records()

    errors = []
    for category in categories:
        records = sh.get_worksheet(int(category['Error Category Number']) + 1).get_all_records()
        for record in records:
            error_number = record['Error Number']
            error_title = record['Error Title']
            error_message = record['Troubleshooting Notes']
            if not error_title:
                continue
            errors.append((
                int(str(category['Error Category Number']) + str(error_number)),
                error_title,
                error_message,
            ))
    generate_cpp_map(errors, 'firmware_errors.hpp')
