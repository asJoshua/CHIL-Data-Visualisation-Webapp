# Variations compared to the provied schema:

## Instruments

1. Created a new table: `instrument_type_table`
    - It has the columns:
        - `instrument_name` (text)
        - `instrument_type_id` (int10) (PK)

2. Modified: `instrument_table`
    - Changed the `type` column from (text) to (int10)
    - Made the `type` column a foreign key to `instrument_type_table(instrument_type_id)`

