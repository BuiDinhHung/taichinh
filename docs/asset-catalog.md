# Marketing Asset Catalog

Kho nay dung de giu ten, nhom va vi tri su dung cua cac asset marketing cho website taichinh.de.

## Dung ngay trong code

Các icon nét và logo dạng text/SVG đã được lưu thành component trong `src/components/MarketingAssets.tsx`.

- Fonds: `GrowthChartIcon`, `PiggyBankIcon`, `FlexibleChoiceIcon`, `DwsLogoMark`, `AllianzLogoMark`
- Vàng: `UmbrellaIcon`, `DirectionSignIcon`, `HandEuroIcon`
- Bất động sản: `BadeniaLogoMark`, `DocumentCheckIcon`, `HouseLineIcon`, `HouseCycleIcon`
- Bảo hiểm: `LockIcon`, `ProfileCircleIcon`, `StopwatchIcon`, `BrokenPlateIcon`, `SofaIcon`, `HealthCrossIcon`
- Năng lượng: `SolarPanelIcon`
- Đối tác: `GeneraliLogoMark`, `FingerHausLogoMark`

Danh sách tra cứu đầy đủ nằm ở `src/lib/marketing-asset-catalog.ts`.

## Ảnh cần file gốc

Các ảnh bitmap người dùng đã gửi trong chat như sơ đồ Cost-Average, chi tiết thỏi vàng, ImmoStart, biểu đồ lãi suất, FingerHaus awards, ADVOCARD và VDE certificate đã được ghi vào catalog với `kind: "bitmap-required"`.

Để dùng đúng ảnh gốc, đặt file vào `public/images/` rồi cập nhật trường `path` trong `src/lib/marketing-asset-catalog.ts`.
