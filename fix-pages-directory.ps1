# PowerShell script to rename src/Pages to src/PageComponents
# This avoids Next.js detecting it as a pages directory

$sourcePath = "src/Pages"
$destPath = "src/PageComponents"

if (Test-Path $sourcePath) {
    Write-Host "Renaming $sourcePath to $destPath..."
    Move-Item -Path $sourcePath -Destination $destPath -Force
    Write-Host "✅ Successfully renamed to $destPath"
    
    # Update import paths in app directory
    Write-Host "`nUpdating import paths in app directory..."
    
    $files = Get-ChildItem -Path "app" -Include "*.jsx","*.js" -Recurse
    
    foreach ($file in $files) {
        $content = Get-Content $file.FullName -Raw
        $newContent = $content -replace '@/Pages/', '@/PageComponents/'
        
        if ($content -ne $newContent) {
            Set-Content -Path $file.FullName -Value $newContent
            Write-Host "Updated: $($file.Name)"
        }
    }
    
    Write-Host "`n✅ Migration fix complete!"
    Write-Host "`nYou can now run: npm run dev"
} else {
    Write-Host "❌ Directory $sourcePath not found"
}
